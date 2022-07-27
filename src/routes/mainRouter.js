const express = require("express");
const router = express.Router();
const controller = require('../controllers/menuController');



router.get('/', controller.index);
router.get('/login', controller.login);
router.get('/register', controller.register);
router.get('/carrito', controller.carrito);
router.get('/detalleDeProducto', controller.detalle);
router.get('/crear', controller.crear);
router.post('/crear', controller.guardar);
router.get('/about', controller.about);

module.exports = router;