const { Post, Comment, ReplyComment } = require("../models");

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
                });
        },
        comment(req, res, next) {
            const currPostId = req.params.postId;

            let currComment = "";
            let commentsArr = [];
            Comment.create({...req.body, author: req.user._id, postedAt: Date.now(), postId: currPostId })
                .then((currentComment) => {

                    currComment = currentComment;

                }).then(() => {
                    Post.findOne({ _id: currPostId })
                        .then((foundPost) => {
                            foundPost.comments.push(currComment);
                            commentsArr = foundPost.comments;
                        })
                        .then(() => {
                            Post.updateOne({ _id: currPostId }, { $set: { comments: commentsArr } })
                                .then((updates) => {
                                    console.log(updates);
                                    res.json("comment added to the post")
                                })

                        })
                })

        },
        replyComment(req, res, next) {
            const currCommentId = req.params.commentId;
            let currReplyComment = "";
            let replyCommentsArr = [];

            ReplyComment.create({...req.body, author: req.user._id, postedAt: Date.now(), commentId: currCommentId })
                .then((currentReplyComment) => {
                    currReplyComment = currentReplyComment;
                })
                .then(() => {
                    Comment.findOne({ _id: currCommentId })
                        .then((foundComment) => {
                            foundComment.replyComments.push(currReplyComment);
                            replyCommentsArr = foundComment.replyComments;
                        })
                        .then(() => {
                            Comment.updateOne({ _id: currCommentId }, { $set: { replyComments: replyCommentsArr } })
                                .then((updates) => {
                                    console.log(updates);
                                    res.json('reply comment added');
                                })
                        })
                })
        }
    }
}