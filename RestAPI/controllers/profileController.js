const { User } = require("../models");

module.exports = {
    get: {
        profile(req, res, next) {

            const { id } = {...req.body };
            // console.log("hi from profile " + id);
            User.findOne({ id })
                .then((user) => {
                    //   console.log(user);
                    res.json(user)
                })
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


    },
    put: {
        editProfile(req, res, next) {

        }
    },
    post: {

    }
}