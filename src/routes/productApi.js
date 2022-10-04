const express = require('express')
const router = express.Router();
const productApiController = require('../controllers/productApiController');

router.get('/', productApiController.lista)
router.get('/:id', productApiController.detail)
router.get('/lastElement', productApiController.lastProduct)

module.exports = router;
