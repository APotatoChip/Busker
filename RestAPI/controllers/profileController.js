const { Post } = require("../models");

module.exports = {
    get: {
        profile(req, res, next) {
            res.json("profile")
        },
        followers(req, res, next) {
            res.json("followers");
        },
        following(req, res, next) {
            res.json("following");
        },
        edit(req, res, next) {
            res.json("edit");
        },
        post(req, res, next) {
            res.json("post");
        },
        messages(req, res, next) {
            res.json("messages");
        },
        message(req, res, next) {
            res.json("message");
        }
    },
    post: {
        create(req, res, next) {
            Post.create({...req.body, postedAt: Date.now(), author: req.user._id })
                .then((createdPost) => {
                    res.json(createdPost);
                })
        }
    }
}