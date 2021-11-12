import mongoose from 'mongoose';
import { MONGO_URI } from './consts.js';

const DBConnection = async () => {
    try {
        const connection = await mongoose.connect(MONGO_URI);
        console.log('Connected to mongoDB!');
    } catch (err) {
        console.log(err);
    }
};

export default DBConnection;
