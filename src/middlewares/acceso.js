/* Esto fue lo primero que practicamos - para ver como funcionan los middleware

const path = require('path');
module.exports = (req,res,next) =>{
    let perfil = 1; // Para mi 9 es = Administrador
    if(perfil != 9){
        return res.render(path.resolve(__dirname, '../views/web/accesoDenegado'));    
    }else{
        next();
    }
}
*/

const fs = require('fs');
const path = require('path');
const db = require("../database/models");
        
module.exports = (req,res,next) =>{
    //Variable locals (super global - vive en las vistas )
    res.locals.usuario = false;
    if(req.session.usuario){
        res.locals.usuario = req.session.usuario;
        return next();
    }else if(req.cookies.email){
        db.Usuario.findOne({ where:{email : req.body.email }}).then(usuario=>{
            req.session.usuario = usuario;
            res.locals.usuario = usuario;
            return next();
        })
        //return res.send(usuario);
        //delete usuario.password;
        req.session.usuario = usuario;
        res.locals.usuario = usuario;
        return next();
    }else{
        return next();
    }
}
