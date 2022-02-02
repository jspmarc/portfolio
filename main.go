package main

import (
	"context"
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/joho/godotenv"
	"github.com/jspmarc/portfolio/graph"
	"github.com/jspmarc/portfolio/graph/generated"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func main() {
	// setup .env
	if err := godotenv.Load(); err != nil {
		log.Panicln("Failed loading env")
	}

	// setup db connection
	uri := os.Getenv("MONGODB_URI")
	if uri == "" {
		log.Panicln("MONGODB_URI env has to be set.")
	}

	ctx := context.Background()
	client, err := mongo.Connect(ctx, options.Client().ApplyURI(uri))
	if err != nil {
		log.Panicln("Failed connecting to Mongo DB")
	}

	defer func() {
		if err := client.Disconnect(ctx); err != nil {
			log.Panicln(err)
		}
	}()

	db := client.Database("blog")

	// setup server
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	resolver := graph.Resolver{
		DbConn: db,
	}
	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &resolver}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
