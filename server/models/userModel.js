import mongoose from 'mongoose';
import addressSchema from './addressModel.js';

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
        addresses: [addressSchema],
    },
    { timestamps: true }
);

export default mongoose.model('User', userSchema);
