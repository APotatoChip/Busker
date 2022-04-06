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


    },
    // post: {

    // },
    // put:{

    // },
    // delete:{

    // }
}