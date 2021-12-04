import mongoose from 'mongoose';
import addressSchema from './Address.js';

const { Schema } = mongoose;

const orderSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        orderItems: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Products',
            },
        ],
        shippingAddress: addressSchema,
        paymentMethod: {
            type: String,
            required: true,
        },
        taxPrice: {
            type: Number,
            required: true,
            default: 0,
        },
        shippingPrice: {
            type: Number,
            required: true,
            default: 0,
        },
        totalPrice: {
            type: Number,
            required: true,
            default: 0,
        },
        isPaid: {
            type: Boolean,
            required: true,
            default: false,
        },
        paidAt: {
            type: Date,
        },
        isDelivered: {
            type: Boolean,
            required: true,
            default: false,
        },
        deliveredAt: {
            type: Date,
        },
    },
    { timestamps: true }
);

export default mongoose.model('Order', orderSchema);
