import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema(
    {
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        thumbnail: {
            type: String,
        },
        images: [String],
        description: {
            type: String,
        },
        price: {
            type: Number,
            required: true,
        },
        reviews: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Review',
            },
        ],
        rating: {
            type: Number,
        },
        quantity: {
            type: Number,
        },
        sold: {
            type: Number,
            default: 0,
        },
        brand: {
            type: String,
        },
    },
    { timestamps: true }
);

export default mongoose.model('Product', productSchema);
