module.exports = (mongoose) => {
    const { Schema, model: Model } = mongoose;
    const { ObjectId, Date, String, Number } = Schema.Types;
    const commentSchema = new Schema({
        author: {
            type: ObjectId,
            ref: 'User'
        },
        postedAt: {
            type: Date
        },
        postId: {
            type: ObjectId,
            ref: 'Post'
        },
        textContent: {
            type: String,
            required: true
        },
        likes: [{
            type: Number
        }],
        replyComments: [{
            type: ObjectId,
            ref: 'Comment'
        }]
    });

    return Model('Comment', commentSchema);
}