import mongoose from 'mongoose';
import DBConnection from '../config/database.js';
import axios from 'axios';
import Product from '../models/productModel.js';

await DBConnection();

const setCategoryObjectId = (category) => {
    let objectId;
    if (category === `electronics`) {
        objectId = mongoose.Types.ObjectId('61956776b27265e5c6f91a48');
    } else if (category === `jewelery`) {
        objectId = mongoose.Types.ObjectId('61956776b27265e5c6f91a49');
    } else if (category === `men's clothing`) {
        objectId = mongoose.Types.ObjectId('61956776b27265e5c6f91a4a');
    } else if (category === `women's clothing`) {
        objectId = mongoose.Types.ObjectId('61956776b27265e5c6f91a4b');
    }
    return objectId;
};

const insertProducts = async () => {
    try {
        await Product.deleteMany();
        const productsRes = await axios.get('https://fakestoreapi.com/products');
        const products = productsRes.data;
        const productsToDB = [];
        for (const product of products) {
            const newProduct = {
                category: setCategoryObjectId(product.category),
                title: product.title,
                image: product.image,
                description: product.description,
                price: product.price,
                reviews: [],
                rating: Math.floor(Math.random() * 5) + 1,
                quantity: Math.floor(Math.random() * 100) + 1,
                sold: Math.floor(Math.random() * 50) + 1,
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
