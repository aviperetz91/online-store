import DBConnection from '../config/database.js';
import axios from 'axios';
import Product from '../models/productModel.js';
import Category from '../models/categoryModel.js';

await DBConnection();

export const getCategoryMap = async () => {
    try {
        const categoryMap = {};
        const categories = await Category.find({});
        for (const category of categories) {
            categoryMap[category.title] = category._id;
        }
        return categoryMap;
    } catch (err) {
        console.log(err);
    }
};

const insertProducts = async () => {
    try {
        await Product.deleteMany();
        const categoryMap = await getCategoryMap();
        const productsRes = await axios.get('https://dummyjson.com/products?limit=100');
        const products = productsRes.data.products;
        const productsToDB = [];
        for (const product of products) {
            const newProduct = {
                category: categoryMap[product.category],
                brand: product.brand,
                title: product.title,
                thumbnail: product.thumbnail,
                images: product.images,
                description: product.description,
                price: product.price,
                reviews: [],
                rating: product.rating,
                quantity: product.stock,
                sold: Math.floor(Math.random() * product.stock) + 1,
            };
            productsToDB.push(newProduct);
        }
        await Product.insertMany(productsToDB);
        console.log('Insert products completed!');
    } catch (err) {
        console.log(err);
    }
};

insertProducts();
