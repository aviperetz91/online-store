import DBConnection from '../config/database.js';
import axios from 'axios';
import User from '../models/User.js';

await DBConnection();

const insertUsers = async () => {
    try {
        await User.deleteMany();
        const usersRes = await axios.get('https://fakestoreapi.com/users');
        const users = usersRes.data;
        const usersToDB = [];
        for (const user of users) {
            const address = {
                city: user.address.city,
                street: user.address.street,
                number: user.address.number,
                zipCode: user.address.zipcode,
                floor: 1,
                apartment: 1,
            };
            const newUser = {
                firstName: user.name.firstname,
                lastName: user.name.lastname,
                email: user.email,
                password: user.password,
                iaAdmin: false,
                addresses: [address],
            };
            usersToDB.push(newUser);
        }
        await User.insertMany(usersToDB);
        console.log('Insert users completed!');
    } catch (err) {
        console.log(err);
    }
};

insertUsers();
