const path = require("path");
const fs = require('fs');
const productArchivo = fs.readFileSync (path.join(__dirname, '../data/productos.json'))
let db = require("../database/models");

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
        db.Auto.create({
            modelo: req.body.modelo,
            precio: req.body.precio,
            id_color: req.body.color,
            anio: req.body.anio,
        })
        .then(()=> {
            res.render('crearProducto')
        })
         
        
    },
    saveEdit: (req, res) => {
        res.render('crearProducto')
    },
}
module.exports = controller