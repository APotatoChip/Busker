const { use } = require("bcrypt/promises");
const { Post, User } = require("../models");
module.exports = {
    get: {
        async allPosts(req, res, next) {
            let usernameArr = [];
            let user;
            const posts = await Post.find();
            // console.log(posts);

            for (const post of posts) {
                const id = post.author;
                user = await User.findOne({ id });
                usernameArr.push(user.username);
            }
            // console.log(usernameArr);

            res.json({ posts, usernameArr });
            // res.json("get post");
        },
        async currentPost(req, res, next) {
            let id = req.path.split("/")[2];
            const post = await Post.findOne({ id });
            id = post.author;
            const user = await User.findOne({ id });
            res.json({ post, user });



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
            //   console.log(req);
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