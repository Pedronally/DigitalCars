const path = require("path");

const controlador = {
    index: (req, res) => {
        res.render('../views/index.ejs');
    },
    login: (req, res) => {
        res.render('../views/login.ejs');
    },
    register: (req, res) => {
        res.render('../views/register.ejs');
    },
    carrito: (req, res) => {
        res.render('../views/carrito.ejs');
    },
    detalle: (req, res) => {
        res.render('../views/detalleDeProducto.ejs');
    },
};

module.exports = controlador;