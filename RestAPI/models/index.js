const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const getUserModel = require('./User');
const getPostModel = require('./Post');
const getCommentModel = require('./Comment');

module.exports = {
    User: getUserModel(mongoose, bcrypt),
    Post: getPostModel(mongoose),
    Comment: getCommentModel(mongoose)
}