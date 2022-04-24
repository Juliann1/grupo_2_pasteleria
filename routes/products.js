const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.products);     
router.get('/category/:category', productsController.categories);  
router.get('/create', productsController.create);
router.post('/create', productsController.createPOST);
router.get('/productCart', productsController.productCart); 
router.get('/:id', productsController.productDetail);  
router.get('/:id/edit', productsController.edit);
router.put('/:id', productsController.editPUT);
router.delete('/:id', productsController.delete)

module.exports = router;