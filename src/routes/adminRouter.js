const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const validationsCreate = require('../middlewares/validationsProduct');
const uploadFile = require("../middlewares/multerMiddlewares")


router.get('/create', adminController.createProduct)
router.get('/edit/:id', adminController.editProduct)
router.put('/edit/:id', uploadFile.single("image") ,adminController.saveEdit)
router.post('/create', uploadFile.single("image") ,validationsCreate, adminController.saveNew)


module.exports = router;