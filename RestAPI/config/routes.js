module.exports = (express, app) => {
    const routers = require('../routers')(express.Router());

    app.use('/', routers.homeRouter, routers.userRouter, routers.profileRouter);



}