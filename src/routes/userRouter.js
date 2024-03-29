const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validationsUser = require('../middlewares/validationUser');
const validationLogin = require('../middlewares/validationLogin');
const uploadFile = require("../middlewares/multerMiddlewares");

router.get('/list', userController.list)
router.get('/login', userController.login)
router.post('/login',validationLogin, userController.loginConfirm)
router.get('/register', userController.register)
router.post('/register',uploadFile.single("image") ,validationsUser , userController.registerConfirm)
router.get('/edit/:id', userController.edit)
router.put('/edit/:id', userController.saveEdit)
router.get('/logout', userController.logout)
module.exports = router;