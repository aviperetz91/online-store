import mongoose from 'mongoose';

const { Schema } = mongoose;

const addressSchema = new Schema(
    {
        city: {
            type: String,
            required: true,
        },
        street: {
            type: String,
            required: true,
        },
        number: {
            type: Number,
            required: true,
        },
        floor: {
            type: Number,
        },
        apartment: {
            type: Number,
        },
        zipCode: {
            type: String,
        },
    },
    { timestamps: true }
);

export default addressSchema;
