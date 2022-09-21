const path = require("path");
const fs = require('fs');
const db = require("../database/models");
const productArchivo = fs.readFileSync (path.join(__dirname, '../data/productos.json'))

const controller = {
    list: (req, res) => {
        db.Auto.findAll()
        .then(products=> {
            
            res.render('productos', {products})
        })
        
    }, 
    detalle: (req, res) => {
        //const products = JSON.parse(productArchivo)
        let auto = db.Auto.findByPk(req.params.id_auto)
        res.render('detalleDeProducto', {
            auto
        }
        )
    },
    eliminar:(req,res) => {
         db.Auto.destroy({where:{id_auto: req.params.id}})
        res.render('/productos/listado')
    }

}
module.exports = controller