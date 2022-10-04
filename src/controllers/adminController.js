const path = require("path");
const fs = require('fs');
const productArchivo = fs.readFileSync (path.join(__dirname, '../data/productos.json'))
const db = require("../database/models");
const e = require("express");
const { validationResult } = require("express-validator");

const controller = {

    createProduct: (req, res) => {
        if(req.session.usuario){
            if(req.session.usuario.rol_id == 1){    
        db.Color.findAll()
        .then(colores=> {
            
            res.render('crearProducto', {colores})
        })
       } else {
        res.redirect('/')
       }
     } else {
            res.redirect('/login')
        }
    },
    editProduct: (req, res) => {
        if(req.session.usuario){
        if(req.session.usuario.rol_id == 1){
            db.Color.findAll().then(colores=>{
                db.Auto.findByPk(req.params.id).then(auto=>{
                console.log(auto);
                db.Color.findOne({ where:{id_color : auto.color_id }}).then(color=>{
                    console.log(color)
                    res.render('editarProducto', {auto,colores,color})})
                })
            })
            
        } else{
          
            res.redirect('/productos')
        }
}    else{
    res.redirect('/login')
}
        
    },
    saveNew: (req, res) => {
        const resultValidation = validationResult(req);
        
        if(resultValidation.errors.length>0){
            db.Color.findAll().then(colores=>{
                res.render('crearProducto',{errors:resultValidation.mapped(),colores:colores},)
            })
        }else{
        
        
        db.Auto.create({
            modelo:req.body.modelo,
            precio: req.body.precio,
            color_id: req.body.color_id,
            anio: req.body.anio,
            foto: req.file.filename
        })

        .then(()=> {
            res.redirect('/productos/listado')
        })
    }
        
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