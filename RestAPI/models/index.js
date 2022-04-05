const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const getUserModel = require('./User');
const getPostModel = require('./Post');
const getCommentModel = require('./Comment');
const getReplyCommentModel = require('./ReplyComment');
const getLocationModel = require('./Location');

module.exports = {
    User: getUserModel(mongoose, bcrypt),
    Post: getPostModel(mongoose),
    Comment: getCommentModel(mongoose),
    ReplyComment: getReplyCommentModel(mongoose),
    Location: getLocationModel(mongoose)
}