const express = require('express');
const router = express.Router();
const formularioProductoController = require('../controllers/formularioProductoController');

router.get('/formularioProducto', formularioProductoController.formularioProducto);

module.exports = router;