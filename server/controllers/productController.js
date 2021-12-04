import Product from '../models/productModel.js';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
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
