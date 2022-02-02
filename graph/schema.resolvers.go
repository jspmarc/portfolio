package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"time"

	"github.com/jspmarc/portfolio/graph/generated"
	"github.com/jspmarc/portfolio/graph/model"
	"go.mongodb.org/mongo-driver/bson"
)

func (r *mutationResolver) CreatePost(ctx context.Context, input model.NewPost) (*model.Post, error) {
	collection := r.DbConn.Collection("posts")

	newPost := model.Post{
		Title:   input.Title,
		Content: input.Content,
		Date:    time.Now().UTC(),
		Tags:    input.Tags,
	}

	_, err := collection.InsertOne(ctx, newPost)

	if err != nil {
		return nil, err
	}

	r.posts = append(r.posts, &newPost)

	return &newPost, nil
}

func (r *postResolver) Date(ctx context.Context, obj *model.Post) (string, error) {
	return obj.Date.String(), nil
}

func (r *queryResolver) Posts(ctx context.Context) ([]*model.Post, error) {
	// initialize r.posts
	// TODO: Watch for changes
	if len(r.posts) == 0 {
		postRes, err := r.DbConn.Collection("posts").Find(ctx, bson.D{})
		if err != nil {
			panic(err)
		}

		err = postRes.All(ctx, &r.posts)
		if err != nil {
			panic(err)
		}
	}
	return r.posts, nil
}

func (r *queryResolver) Experiences(ctx context.Context) ([]*model.Experience, error) {
	// initialize r.Experiences()
	// TODO: Watch for changes
	if len(r.experiences) == 0 {
		experiencesRes, err := r.DbConn.Collection("experiences").Find(ctx, bson.D{})
		if err != nil {
			panic(err)
		}

		err = experiencesRes.All(ctx, &r.experiences)
		if err != nil {
			panic(err)
		}
	}
	return r.experiences, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Post returns generated.PostResolver implementation.
func (r *Resolver) Post() generated.PostResolver { return &postResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type postResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
