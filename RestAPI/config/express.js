// Setup Express and Middlewares
const cookieParser = require('cookie-parser');
const cors = require('cors');

module.exports = (express, app) => {

    app.use(express.static('static'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cors({
        methods: ['GET', 'POST'],
        credentials: true
    }));
    app.use(cookieParser());

};