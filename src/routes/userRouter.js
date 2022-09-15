const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validations = require('../middlewares/validationUser');
const uploadFile = require("../middlewares/multerMiddlewares");


router.get('/login', userController.login)
router.post('/login', userController.loginConfirm)
router.get('/register', userController.register)
router.post('/register',validations , userController.registerConfirm)

module.exports = router;