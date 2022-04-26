const { User } = require("../models");

module.exports = {
    get: {
        profile(req, res, next) {
            if (req.user !== undefined) {
                const { _id: userId } = req.user;
                User.findOne({ _id: userId }, { password: 0, __v: 0 }) //finding by Id and returning without password and __v
                    .then(user => { res.status(200).json(user) })
                    .catch(next);
            } else {
                res.json(null);
            }
        },
        followers(req, res, next) {
            res.json("followers");
        },
        following(req, res, next) {
            res.json("following");
        }


    },
    put: {
        editProfile(req, res, next) {
            //console.log(req.body);
            const { _id: userId } = req.user;
            // const { username, email } = req.body;

            User.findOneAndUpdate({ _id: userId }, req.body, { runValidators: true, new: true })
                .then(x => { res.status(200).json(x) })
                .catch(next);
        }
    },
    post: {

    }
}