const { User } = require("../models");

module.exports = {
    get: {
        profile(req, res, next) {
            console.log(req.user);
            const { _id: userId } = req.user;

            User.findOne({ _id: userId }, { password: 0, __v: 0 }) //finding by Id and returning without password and __v
                .then(user => { res.status(200).json(user) })
                .catch(next);
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
            const { _id: userId } = req.user;
            const { username, email } = req.body;

            userModel.findOneAndUpdate({ _id: userId }, { username, email }, { runValidators: true, new: true })
                .then(x => { res.status(200).json(x) })
                .catch(next);
        }
    },
    post: {

    }
}