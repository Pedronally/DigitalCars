const path = require("path");

const controlador = {
    index: (req, res) => {
        res.sendFile(path.join(__dirname, '../../views/index.html'))
    },
    login: (req, res) => {
        res.sendFile(path.join(__dirname, '../../views/login.html'))
    },
    register: (req, res) => {
        res.sendFile(path.join(__dirname, '../../views/register.html'))
    },
    carrito: (req, res) => {
        res.sendFile(path.join(__dirname, '../../views/carrito.html'))
    },
    detalle: (req, res) => {
        res.sendFile(path.join(__dirname, '../../views/detalleDeProducto.html'))
    },
};

module.exports = controlador;