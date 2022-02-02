package model

type ExperienceLinks struct {
	Certificate *string `bson:"certificate"`
	GitRepo     *string `bson:"git_repo"`
	Deployment  *string `bson:"deployment"`
}
