const express = require("express");
const router = express.Router();
const controller = require('../controllers/menuController');



router.get('/', controller.index);
router.get('/login', controller.login);
router.get('/register', controller.register);
router.get('/carrito', controller.carrito);
router.get('/detalleDeProducto', controller.detalle);
router.get('/crear', controller.crear);

module.exports = router;