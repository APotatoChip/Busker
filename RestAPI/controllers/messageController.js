module.exports = {
    get: {
        messages(req, res, next) {
            res.json("get all messages");
        },
        message(req, res, next) {
            res.json("get current message");
        }
    },
    post: {}
}