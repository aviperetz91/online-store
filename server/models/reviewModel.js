import mongoose from 'mongoose';

const { Schema } = mongoose;

const reviewSchema = new Schema(
    {
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        rating: {
            type: Number,
            required: true,
        },
        comment: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model('Review', reviewSchema);
