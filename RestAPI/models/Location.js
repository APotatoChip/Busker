module.exports = (mongoose) => {
    const { Schema, model: Model } = mongoose;
    const { ObjectId, Date, Point, String } = Schema.Types;

    const locationSchema = new Schema({
        busker: {
            type: ObjectId,
            ref: 'User',
            required: true
        },
        location: {
            type: [String],
            required: true
        },
        markedAt: {
            type: Date,
            required: true
        }
    })

    return Model('Location', locationSchema);
}