module.exports = (mongoose) => {
    const { Schema, model: Model } = mongoose;
    const { ObjectId, Date, String, Number } = Schema.Types;
    const commentSchema = new Schema({
        author: {
            type: ObjectId,
            ref: 'User',
            required: true
        },
        postedAt: {
            type: Date,
            required: true
        },
        postId: {
            type: ObjectId,
            ref: 'Post',
            required: true
        },
        textContent: {
            type: String,
            required: true
        },
        likes: [{
            type: Number,
            default: 0
        }],
        replyComments: [{
            type: ObjectId,
            ref: 'Comment'
        }]
    });

    return Model('Comment', commentSchema);
}