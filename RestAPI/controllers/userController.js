const { User } = require('../models');
const { jwt } = require('../utils');
const { cookieName } = require('../config');


module.exports = {
    get: {
        login(req, res, next) {
            res.json("get login");
        },
        register(req, res, next) {
            res.json("get register");
        },
        logout(req, res, next) {

            // console.log(res);
            // console.log(cookieName);
            res
                .clearCookie(cookieName)
                .json("get logout and cookie cleared");
        }
    },
    post: {
        login(req, res, next) {

            const { email, password } = {...req.body };


            User
                .findOne({ email })
                .then((user) => {

                    return Promise.all([
                        user.comparePasswords(password),
                        user,
                    ])
                })
                .then(([isPasswordsMatched, user]) => {
                    if (!isPasswordsMatched) {
                        throw new Error('Wrong credentials');
                    }

                    const token = jwt.createToken(user._id);
                    res
                        .status(200)
                        .cookie(cookieName, token, { maxAge: 3600000 })
                        .json(user)
                })
                .catch((e) => {

                    // console.log(e)
                    return new Error(e);
                })

        },
        register(req, res, next) {

            const { username, password, email, typeOptions } = {...req.body };

            User
                .findOne({ username })
                .then((user) => {
                    if (user) {
                        throw new Error('User already exists...');
                    }
                    return User.create({ username, password, email, typeOptions });
                })
                .then((createdUser) => {
                    res.json("post register");
                })
                .catch((e) => {
                    console.log(e);

                });

        }
    }
}