const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')


router.get('/:categoriaProductos', productsController.product);


module.exports = router;