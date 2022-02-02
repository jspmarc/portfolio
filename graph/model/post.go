package model

import (
	"time"
)

type Post struct {
	Title   string    `bson:"title"`
	Content string    `bson:"string"`
	Date    time.Time `bson:"Date"`
	Tags    []string  `bson:"tags"`
}
