const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validations = require('../middlewares/validationUser');
const validationLogin = require('../middlewares/validationLogin');
const uploadFile = require("../middlewares/multerMiddlewares");

router.get('/list', userController.list)
router.get('/login', userController.login)
router.post('/login',validationLogin, userController.loginConfirm)
router.get('/register', userController.register)
router.post('/register',validations , userController.registerConfirm)
router.get('/edit/:id', userController.edit)
router.put('/edit/:id', userController.saveEdit)

module.exports = router;