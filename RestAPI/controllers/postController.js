const { use } = require("bcrypt/promises");
const { Post, User } = require("../models");
module.exports = {
    get: {
        async allPosts(req, res, next) {

            let userId = req.user._id;
            let username = req.user.username;
            const posts = await Post.find({ author: userId });
            res.json({ posts, username });


            //  let usernameArr = [];
            // for (const post of posts) {
            //     const id = post.author;
            //     user = await User.findOne({ _id: id });
            //     usernameArr.push(user.username);
            // }
            // console.log(usernameArr);

            //res.json({ posts, usernameArr });
            // res.json("get post");
        },
        async currentPost(req, res, next) {
            let id = req.path.split("/")[2];
            const post = await Post.findOne({ _id: id });
            id = post.author;
            const user = await User.findOne({ _id: id });
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
            console.log(req);
            Post.create({ postedAt: Date.now(), author: req.user._id, ...req.body })
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