const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')






router.get('/:category', productsController.products);  //FUNCIONA. PERO COMENTAR PARA QUE FUNCIONE EL RESTO.
// router.get('/create', productsController.create);
router.get('/:id', productsController.productDetail);  
// router.get('/:id/edit', productsController.edit);
// router.get('/productCart', productsController.productCart);  //FUNCIONA. PERO COMENTAR productDetail PARA QUE FUNCIONE. 

module.exports = router;