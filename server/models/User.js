import mongoose from 'mongoose';
import addressSchema from './Address.js';

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: {
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
