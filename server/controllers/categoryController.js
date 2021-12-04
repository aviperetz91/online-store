import Category from '../models/categoryModel.js';

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find({});
        res.json(categories);
    } catch (err) {
        req.next(err);
    }
};

export const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (category) {
            res.json(category);
        } else {
            res.status(404).json({ message: 'Category Not Found' });
        }
    } catch (err) {
        req.next(err);
    }
};
