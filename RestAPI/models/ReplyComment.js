module.exports = (mongoose) => {
    const { Schema, model: Model } = mongoose;
    const { ObjectId, Date, String, Number } = Schema.Types;
    const replyCommentSchema = new Schema({
        author: {
            type: ObjectId,
            ref: 'User',
            required: true
        },
        postedAt: {
            type: Date,
            required: true
        },
        commentId: {
            type: ObjectId,
            ref: 'Comment',
            required: true
        },
        textContent: {
            type: String,
            required: true
        },
        likes: [{
            type: Number,
            default: 0
        }]
    });

    return Model('ReplyComment', replyCommentSchema);
}