const { ObjectId } = require("mongodb");
const { Location, User } = require("../models");
module.exports = {
    get: {
        async currentLocation(req, res, next) {
            const { _id: userId } = req.user;
            const location = await User.findOne({ _id: userId }).then((user) => {
                console.log(user)
                return user.location;
            })

            Location.findOne({ _id: location }).then((loc) => {
                res.json(loc.location);
            })
        }
    },
    put: {

    },
    post: {
        async markerPosition(req, res, next) {

            let currLocation = await Location.create({ busker: req.user._id, location: req.body, markedAt: Date.now() });
            console.log(req.user._id);
            User.findOneAndUpdate({ username: req.user.username }, { $set: { location: currLocation } }, { new: true }).then((ctx) => {
                res.json(ctx)
            })
        }
    },
    delete: {
        currentMarker(req, res, next) {
            User.findOneAndUpdate({ username: req.user.username }, { $set: { location: null } }, { new: true }).then((ctx) => {
                res.json(ctx)
            })


        }
    }
}