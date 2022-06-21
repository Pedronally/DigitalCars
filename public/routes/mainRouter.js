const express = require("express");
const controller = require('../controllers/menuController');

const router = express.Router();

router.get('/', controller.index);
router.get('/login', controller.login);
router.get('/register', controller.register);
router.get('/carrito', controller.carrito);
router.get('/detalle', controller.detalle);

module.exports = router;