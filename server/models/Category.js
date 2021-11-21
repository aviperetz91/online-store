import mongoose from 'mongoose';

const { Schema } = mongoose;

const categorySchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        image: {
            type: String,
        },
    },
    { timestamps: true }
);

export default mongoose.model('Category', categorySchema);
