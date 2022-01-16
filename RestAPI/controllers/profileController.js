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


    },
    put: {
        editProfile(req, res, next) {

        }
    },
    post: {

    }
}