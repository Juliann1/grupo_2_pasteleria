const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');





router.get('/products', productsController.products);     
// router.get('/products/:category', productsController.categorys);  
router.get('/products/create', productsController.create);
router.get('/products/:id', productsController.productDetail);  
router.get('/products/:id/edit', productsController.edit);
router.get('/productCart', productsController.productCart); 

module.exports = router;