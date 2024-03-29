const path = require("path");
const db = require("../database/models");
const { validationResult } = require("express-validator");
const { saveEdit } = require("./adminController");
const bcrypt = require('bcrypt');
const { localsName } = require("ejs");


const controller = {

    list: (req, res) => {
    
        db.Usuario.findAll()
        .then(usuarios => {res.render('usuarios', {usuarios})})
        
    },
    login: (req, res) => {
        if(req.session.usuario){
            res.redirect('/')

        }else{
        res.render('login')
        }
    },
    register: (req, res) => {
        if(req.session.usuario){
            res.redirect('/')

        }else{
        res.render('register')
        }
    },
    registerConfirm:(req,res)=>{
       // if(req.file){
        const resultValidation = validationResult(req);
       console.log(resultValidation.errors)
       console.log(req.body)
       if(resultValidation.errors.length>0){
            res.render('register',{errors:resultValidation.mapped()})

        }
        db.Usuario.create({
            nombre:req.body.nombre,
            email:req.body.email,
            contrasenia:bcrypt.hashSync(req.body.contrasenia, 10),
            fdn:req.body.fdn,
            foto: req.file.filename,
            rol_id:2
                })
            .then(()=>{
                
                res.redirect('/')
            })
        },
    //} 
       /* else {
            res.render('register')
        }*/
        /// fijarse que no se repita
    
    loginConfirm:(req,res)=>{ 
        
        const resultValidation = validationResult(req);
        console.log(resultValidation.errors.length)
        console.log(req.body)
        if(resultValidation.errors.length<=0){
        db.Usuario.findOne({ where:{email : req.body.email }})
        .then(user =>{
            console.log(user.contrasenia)
            console.log(bcrypt.hashSync(req.body.contrasenia, 10))
            if(user){
                const validPassword = bcrypt.compare(req.body.contrasenia, user.contrasenia)
                if (validPassword) {
                    req.session.usuario = user;
                    console.log("inicio sesion")
                    res.redirect("/")
                    
                }
                else{
                    console.log("error")
                    res.redirect("/login")
                }

            }else{
                res.redirect('/login')
            }
            
            
        })
    }else{
        res.render('login',{errors:resultValidation.mapped()})
    }
        
},
    edit: (req, res) => {
        db.Usuario.findByPk(req.params.id)
        .then(usuario => {res.render('editUsuario', {usuario})})
        
    },
    saveEdit : (req, res) => {
        console.log(req.body)
        const user = {
            nombre: req.body.nombre,
            email:req.body.email,
            contrasenia:bcrypt.hashSync(req.body.contrasenia, 10),
            fdn:req.body.fdn
        }
        console.log(user)
        db.Usuario.update(user,{where:{id_usuario: req.params.id}} ).then(()=>
        {res.redirect('/user/list')})
    },
    logout: (req,res) =>{
        req.session.destroy();
        res.cookie('email',null,{maxAge: -1});
        res.redirect('/')
      }

    }
    
module.exports = controller