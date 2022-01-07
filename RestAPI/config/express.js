// Setup Express and Middlewares
const cookieParser = require('cookie-parser');

module.exports = (express, app) => {

    app.use(express.static('static'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());

};