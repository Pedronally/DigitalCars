const path = require("path");
const fs = require('fs');
const productArchivo = fs.readFileSync (path.join(__dirname, '../data/productos.json'))
let db = require("../database/models");

const controller = {

    createProduct: (req, res) => {
        db.Color.findAll()
        .then(colores=> {
            
            res.render('crearProducto', {colores})
        })
        
    },
    editProduct: (req, res) => {
        const products = JSON.parse(productArchivo)
        const auto = products.find(auto => auto.id == req.params.id)

        res.render('editarProducto', {auto})
    },
    saveNew: (req, res) => {
        console.log("id:")
        console.log(req.body)
        db.Auto.create({
            modelo: req.body.modelo,
            precio: req.body.precio,
            color_id: req.body.color,
            anio: req.body.anio,
        })
        .then(()=> {
            res.render('index')
        })
         
        
    },
    saveEdit: (req, res) => {
        res.render('crearProducto')
    },
}
module.exports = controller