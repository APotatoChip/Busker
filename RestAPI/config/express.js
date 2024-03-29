// Setup Express and Middlewares
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { isAuth } = require('../utils');

module.exports = (express, app) => {

    app.use(express.static('static'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cors({ origin: true, credentials: true }));

    app.use(cookieParser());
    app.use(isAuth);

};