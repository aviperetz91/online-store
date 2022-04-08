import Product from '../models/productModel.js';

// ********** Category / Rating / Sell / Arrival **********
// by category = /products?category=61956776b27265e5c6f91a48mit=4
// by price = /products?price="20-49.99"
// by rating = /products?sortBy=rating&order=desc&limit=4
// by sell = /products?sortBy=sold&order=desc&limit=4
// by arrival = /products?sortBy=createdAt&order=asc&limit=4
// full = /products?category=61956776b27265e5c6f91a48&price="20-49.99"&sortBy=rating&order=desc&limit=4
// if no params are sent, then all products are returned
export const getProducts = async (req, res) => {
    const category = req.query.categoryId ? req.query.categoryId : undefined;
    const priceRange = req.query.priceRange ? req.query.priceRange : undefined;
    const order = req.query.order ? req.query.order : 'asc';
    const sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    const limit = req.query.limit ? +req.query.limit : undefined;
    const findArgs = {};
    if (category && category !== '') {
        findArgs.category = category;
    }
    if (priceRange && priceRange !== '') {
        let priceRangeArray = priceRange.split('-');
        findArgs['price'] = {
            $gte: priceRangeArray[0],
            $lte: priceRangeArray[1],
        };
    }
    try {
        const products = await Product.find(findArgs)
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
