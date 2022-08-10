const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/create', adminController.createProduct)
router.get('/edit/:id', adminController.editProduct)

module.exports = router;