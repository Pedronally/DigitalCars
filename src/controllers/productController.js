const path = require("path");
const fs = require('fs');
const productArchivo = fs.readFileSync (path.join(__dirname, '../data/productos.json'))

const controller = {
    list: (req, res) => {
        const products = JSON.parse(productArchivo)
        res.render('productos', {
            products
        }
        )
    }, 
    detalle: (req, res) => {
        const products = JSON.parse(productArchivo)
        const auto = products.find(auto => auto.id == req.params.id)
        res.render('detalleDeProducto', {
            auto
        }
        )
    }

}
module.exports = controller