const express = require('express');
const router = express.Router();
const formularioCambioController = require('../controllers/formularioCambioController');

router.get('/formularioCambio', formularioCambioController.formularioCambio);

module.exports = router;