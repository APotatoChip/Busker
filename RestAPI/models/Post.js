module.exports = (mongoose) => {
    const { Schema, model: Model } = mongoose;
    const { String, Number, ObjectId, Date } = Schema.Types;

    const postSchema = new Schema({
        postedAt: {
            type: Date,
        },
        author: {
            type: ObjectId,
            ref: 'User',
            required: true
        },
        textContent: {
            type: String,
            required: true
        },
        likes: {
            type: Number,
            default: 0
        },
        comments: [{
            type: ObjectId,
            ref: 'Comment'
        }]
    });

    return Model('Post', postSchema);
};