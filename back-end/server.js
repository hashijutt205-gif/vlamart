const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const productRoutes = require('./routes/productRoutes'); // import product routes

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/vlamart')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Use product routes
// All product routes will start with /api/products
app.use('/api/products', productRoutes);

// Start server
app.listen(3000, () => console.log('Server running on port 3000'));
