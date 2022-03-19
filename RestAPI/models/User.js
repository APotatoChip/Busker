module.exports = (mongoose, bcrypt) => {

    const { Schema, model: Model } = mongoose;
    const { String, ObjectId } = Schema.Types;
    const { saltRounds } = require('../config');

    const userSchema = new Schema({
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            default: ""
        },
        bio: {
            type: String,
            default: ""
        },
        typeOptions: {
            type: String,
            required: true
                // possibleValues: ['performer', 'viewer']
        },
        posts: [{
            type: ObjectId,
            ref: 'Post'
        }],
        followes: [{
            type: Schema.ObjectId,
            ref: 'User'
        }],
        following: [{
            type: Schema.ObjectId,
            ref: 'User'
        }]
    });

    userSchema.methods = {
        comparePasswords(password) {
            return bcrypt.compare(password, this.password);
        }
    };

    userSchema.pre('save', function(next) {

        if (!this.isModified('password')) {
            next();
            return;
        }

        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) {
                next(err);
                return;
            }
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) {
                    next(err);
                    return;
                }

                this.password = hash;
                next();
            });
        });
    });

    return Model('User', userSchema);
};