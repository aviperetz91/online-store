import Product from '../models/productModel.js';

// ********** Rating / Sell / Arrival **********
// by rating = /products?sortBy=rating&order=desc&limit=4
// by sell = /products?sortBy=sold&order=desc&limit=4
// by arrival = /products?sortBy=createdAt&order=desc&limit=4
// if no params are sent, then all products are returned
export const getProducts = async (req, res) => {
    const order = req.query.order ? req.query.order : 'asc';
    const sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    const limit = req.query.limit ? +req.query.limit : undefined;
    try {
        const products = await Product.find()
            .sort([[sortBy, order]])
            .limit(limit);
        res.json(products);
    } catch (err) {
        req.next(err);
    }
};

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product Not Found' });
        }
    } catch (err) {
        req.next(err);
    }
};
