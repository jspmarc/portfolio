package main

import (
	"context"
	"errors"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/joho/godotenv"
	"github.com/jspmarc/portfolio/graph"
	"github.com/jspmarc/portfolio/graph/generated"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func getDbClient(ctx context.Context, uri string) (*mongo.Client, error) {
	if uri == "" {
		return nil, errors.New("MONGODB_URI env has to be set.")
	}

	client, err := mongo.Connect(ctx, options.Client().ApplyURI(uri))
	if err != nil {
		return nil, err
	}

	return client, nil
}

func setupRouter() *chi.Mux {
	r := chi.NewRouter()
	r.Use(middleware.Logger)

	return r
}

func graphqlHandler(db *mongo.Database) func(http.ResponseWriter, *http.Request) {
	resolver := graph.Resolver{
		DbConn: db,
	}
	h := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &resolver}))

	return func(rw http.ResponseWriter, r *http.Request) {
		h.ServeHTTP(rw, r)
	}
}

// copied from:
// https://github.com/go-chi/chi/blob/master/_examples/fileserver/main.go
func fileServer(r chi.Router, path string, root http.FileSystem) {
	if strings.ContainsAny(path, "{}*") {
		panic("FileServer does not permit any URL parameters.")
	}

	if path != "/" && path[len(path)-1] != '/' {
		r.Get(path, http.RedirectHandler(path+"/", 301).ServeHTTP)
		path += "/"
	}
	path += "*"

	r.Get(path, func(w http.ResponseWriter, r *http.Request) {
		rctx := chi.RouteContext(r.Context())
		pathPrefix := strings.TrimSuffix(rctx.RoutePattern(), "/*")
		fs := http.StripPrefix(pathPrefix, http.FileServer(root))
		fs.ServeHTTP(w, r)
	})
}

func main() {
	// setup .env
	if err := godotenv.Load(); err != nil {
		log.Panicln("Failed loading env")
	}

	// setup db connection
	uri := os.Getenv("MONGODB_URI")
	ctx := context.Background()
	client, err := getDbClient(ctx, uri)
	if err != nil {
		log.Panicln("Failed connecting to Mongo DB: ", err)
	}

	defer func() {
		if err := client.Disconnect(ctx); err != nil {
			log.Panicln(err)
		}
	}()

	db := client.Database("blog")

	// setup server
	workDir, _ := os.Getwd()
	filesDir := http.Dir(filepath.Join(workDir, "public"))
	r := setupRouter()
	r.Post("/api/query", graphqlHandler(db))
	r.Get("/api", playground.Handler("GraphQL Playground", "/api/query"))
	fileServer(r, "/", filesDir)

	port := "8080"
	log.Printf("connect to http://localhost:%s/api for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, r))
}
