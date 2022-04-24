const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.products);     
router.get('/category/:category', productsController.categories);  
router.get('/create', productsController.create);
router.get('/:id', productsController.productDetail);  
router.get('/:id/edit', productsController.edit);
router.get('/productCart', productsController.productCart); 

module.exports = router;