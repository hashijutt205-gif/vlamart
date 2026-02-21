const express = require('express');
const router = express.Router();
const { getProducts, addProduct } = require('../controllers/productController');

// Routes
router.get('/', getProducts);    // GET all products
router.post('/', addProduct);    // ADD new product

module.exports = router;
