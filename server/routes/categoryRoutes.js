import express from 'express';
import { getCategories, getCategoryById } from '../controllers/categoryController.js';

const router = express.Router();

// @route   GET api/categories
// @desc    Get all categories
// @access  Public
router.get('/', getCategories);

// @route   GET api/categories/:id
// @desc    Get single category by id
// @access  Public
router.get('/:id', getCategoryById);

export default router;
