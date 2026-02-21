const Product = require('../models/product');

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

// Add a new product
const addProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json({ message: 'Product added!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add product' });
  }
};

module.exports = { getProducts, addProduct };
