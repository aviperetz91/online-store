import DBConnection from '../config/database.js';
import axios from 'axios';
import Category from '../models/Category.js';

await DBConnection();

const insertCategories = async () => {
    try {
        await Category.deleteMany();
        const categoryRes = await axios.get('https://fakestoreapi.com/products/categories');
        const categories = categoryRes.data;
        const categoriesToDB = [];
        for (const category of categories) {
            const newCategory = {
                title: category,
                description: '',
                image: '',
            };
            categoriesToDB.push(newCategory);
        }
        await Category.insertMany(categoriesToDB);
        console.log('Insert categories completed!');
    } catch (err) {
        console.log(err);
    }
};

insertCategories();
