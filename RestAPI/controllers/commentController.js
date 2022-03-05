const { Post, Comment, ReplyComment } = require("../models");
module.exports = {
    get: {
        postComments(req, res, next) {
            const id = req.path.split("/")[2];

            Comment.find({ postId: id })
                .then(cmts => res.json(cmts))
                // res.json("cmts");
        }

    },
    put: {
        likeComment(req, res, next) {

        },
        likeReply(req, res, next) {}
    },
    post: {
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
    },
    delete: {
        deleteComment(req, res, next) {

        },
        deleteReplyComment(req, res, next) {

        }
    }
}