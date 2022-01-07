module.exports = {
    get: {
        unauthhome(req, res, next) {
            res.json("get unauthhome");
        },
        authhome(req, res, next) {
            res.json("get authhome");
        },
        map(req, res, next) {
            res.json("get map");
        },
        tag(req, res, next) {
            res.json("get tag");
        },

    },
    // post: {

    // },
    // put:{

    // },
    // delete:{

    // }
}