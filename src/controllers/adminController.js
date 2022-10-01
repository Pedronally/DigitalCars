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
          db.Color.findAll().then(colores=>{
            db.Auto.findByPk(req.params.id).then(auto=>{
            console.log(auto);
            db.Color.findOne({ where:{id_color : auto.color_id }}).then(color=>{
                console.log(color)
                res.render('editarProducto', {auto,colores,color})})
            })
            
        
})
        
        
    },
    saveNew: (req, res) => {
        
        console.log(req.body)
        console.log(req.file)
        db.Auto.create({
            modelo: req.body.modelo,
            precio: req.body.precio,
            color_id: req.body.color,
            anio: req.body.anio,
            foto: req.file
        })
        .then(()=> {
            res.render('productos')
        })
         
        
    },
    saveEdit: (req, res) => {
        
        const auto = {
            modelo: req.body.modelo,
            precio: req.body.precio,
            color_id: req.body.color,
            anio: req.body.anio,
        }
        db.Auto.update(auto,{where:{id_auto: req.params.id}})
        res.redirect('/productos/listado')
    },
}
module.exports = controller