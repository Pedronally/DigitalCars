const path = require("path");
const { getProduct } = require('../services/products.service')

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
    editar: async (req, res) => {
        const { productId } = req.params
        if (!productId) {
            return res.render('../views/index.ejs')
        }
        const product = await getProduct(productId)
        if(product.length == 0) return res.render('../views/index.ejs')
        res.render('../views/editarProducto.ejs', product[0])
    },
    guardar: (req, res) => {
        let producto = req.body
        console.log(producto)
        res.send(producto)
    },
    about: (req, res) => {
        res.render('../views/about.ejs')
    }
}

module.exports = controlador;