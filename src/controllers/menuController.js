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
    crear: (req, res) => {
        res.render('../views/crearProducto.ejs') 
    },
    guardar: (req,res) => {
        let producto = req.body
        console.log(producto)
        res.send(producto)
    },
    about: (req, res) => {
        res.render('../views/about.ejs')
    }
}

module.exports = controlador;