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
}
module.exports = controller