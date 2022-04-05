module.exports = (mongoose) => {
    const { Schema, model: Model } = mongoose;
    const { ObjectId, Date, Number } = Schema.Types;

    const locationSchema = new Schema({
        busker: {
            type: ObjectId,
            ref: 'User',
            required: true
        },
        location: {
            lat: Number,
            lng: Number
        },
        markedAt: {
            type: Date,
            required: true
        }
    })

    return Model('Location', locationSchema);
}