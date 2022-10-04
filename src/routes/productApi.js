const express = require('express')
const router = express.Router();
const productApiController = require('../controllers/productApiController');

router.get('/', productApiController.lista);
router.get('/lastElement', productApiController.lastProduct)
router.get('/detail/:id', productApiController.detail);


module.exports = router;
