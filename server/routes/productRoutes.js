import express from 'express';
import { getProducts, getProductById } from '../controllers/productController.js';

const router = express.Router();

// @route   GET api/products
// @desc    Get all products
// @access  Public
router.get('/', getProducts);

// @route   GET api/products/:id
// @desc    Get single product by id
// @access  Public
router.get('/:id', getProductById);

export default router;
