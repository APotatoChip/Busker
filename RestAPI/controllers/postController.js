const { Post } = require("../models");
module.exports = {
    get: {
        post(req, res, next) {
            res.json("post");
        },
    },
    post: {
        create(req, res, next) {
            Post.create({...req.body, postedAt: Date.now(), author: req.user._id })
                .then((createdPost) => {
                    res.json(createdPost);
                });
        },
    }
}