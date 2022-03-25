const { Post } = require("../models");
module.exports = {
    get: {
        allPosts(req, res, next) {

            Post.find()
                .then(posts => {
                    res.json(posts)
                    console.log(posts);
                });
            // res.json("get post");
        },
        currentPost(req, res, next) {
            const id = req.path.split("/")[2];
            Post.findOne({ id })
                .then((post) => {
                    res.json(post);
                })
        },

        editPost(req, res, next) {

        }
    },
    put: {
        editPost(req, res, next) {

        }
    },
    post: {
        create(req, res, next) {
            console.log(req);
            Post.create({...req.body, postedAt: Date.now(), author: req.user._id })
                .then((createdPost) => {
                    res.json(createdPost);
                });
        },
    },
    delete: {
        deletePost(req, res, next) {

        }
    }
}