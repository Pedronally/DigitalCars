const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/listado', productController.list);
router.get('/detalle/:id', productController.detalle);
router.delete('/eliminar/:id',productController.eliminar);

module.exports = router;