const { Location, User } = require("../models");
module.exports = {
    get: {
        async currentLocation(req, res, next) {
            const userId = req.user._id;
            const user = await User.findOne({ _id: userId });
            const location = user.location;

            Location.findOne({ _id: location }).then((loc) => {
                res.json(loc);
            })

        },
        //??????????
        userById(req, res, next) {
            // getting the id from url -> bad practise - refactor later
            userId = req.url.split("%22")[1];
            User.find({ _id: userId }).then((user) => {
                res.json(user);
            })
        },

        allCurrentlyPerforming(req, res, next) {
            Location.find({}).then((locations) => {
                //console.log(locations);
                res.json(locations);
            });
        },

        // ??????????
        allTaggedUsers(req, res, next) {
            User.find({}).where('location').ne(null).then((users) => {
                // console.log(users);
                res.json(users);
            })
        }
    },
    put: {

    },
    post: {
        async markerPosition(req, res, next) {

            let currLocation = await Location.create({ busker: req.user._id, location: req.body, markedAt: Date.now() });
            //console.log(req.user._id);
            User.findOneAndUpdate({ username: req.user.username }, { $set: { location: currLocation } }, { new: true }).then((ctx) => {
                res.json(ctx)
            })
        }
    },
    delete: {

        async currentMarker(req, res, next) {
            const { _id: userId } = req.user;
            const location = await User.findOne({ _id: userId }).then((user) => {
                return user.location;
            })

            Location.findOneAndDelete({ _id: location }).then((loc) => {

                res.json("deleted" + loc);
            })
            User.findOneAndUpdate({ username: req.user.username }, { $set: { location: null } }, { new: true }).then((ctx) => {
                res.json(ctx)
            })


        }
    }
}