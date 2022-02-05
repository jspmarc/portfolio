package graph

//go:generate go run github.com/99designs/gqlgen generate

import (
	"github.com/jspmarc/portfolio/graph/model"
	"go.mongodb.org/mongo-driver/mongo"
)

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	DbConn      *mongo.Database
	posts       []*model.Post
	experiences []*model.Experience
	skills      []*model.Skill
}
