const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbUrl: 'mongodb://localhost:27017/Busker',
        cookieName: 'x-auth-token',
        secret: 'SuperSecureSecret',
        saltRounds: 11
    }
};

module.exports = config[env];