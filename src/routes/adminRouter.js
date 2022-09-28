const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const validations = require('../middlewares/validationsProduct');
const uploadFile = require("../middlewares/multerMiddlewares")


router.get('/create', adminController.createProduct)
router.get('/edit/:id', adminController.editProduct)
router.put('/edit/:id', adminController.saveEdit)
router.post('/create', uploadFile.single("image") ,validations, adminController.saveNew)


module.exports = router;