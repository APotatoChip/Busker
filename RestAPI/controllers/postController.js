const { Post } = require("../models");
module.exports = {
    get: {
        post(req, res, next) {
            Post.find()
                .then(posts => res.json(posts));
            // res.json("get post");
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