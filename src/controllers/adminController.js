const path = require("path");
const fs = require('fs');
const productArchivo = fs.readFileSync (path.join(__dirname, '../data/productos.json'))


const controller = {

    createProduct: (req, res) => {
        res.render('crearProducto')
    },
    editProduct: (req, res) => {
        const products = JSON.parse(productArchivo)
        const auto = products.find(auto => auto.id == req.params.id)

        res.render('editarProducto', {auto})
    },
    saveNew: (req, res) => {
        const products = JSON.parse(productArchivo)
        const ultimoAuto = products.pop()
        let autoNuevo = {
            id: ultimoAuto.id +1,
            modelo: req.body.modelo,
            precio: req.body.precio,
            color: req.body.color,
            motor: req.body.motor,
        } 
        products.push(autoNuevo)
        const nuevoJson = JSON.stringify(products)
        fs.writeFileSync (path.join(__dirname, '../data/productos.json'), nuevoJson)
        res.render('crearProducto')
    },
    saveEdit: (req, res) => {
        res.render('crearProducto')
    },
}
module.exports = controller