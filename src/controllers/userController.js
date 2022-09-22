const path = require("path");
const db = require("../database/models");
const { validationResult } = require("express-validator")


const controller = {

    login: (req, res) => {
        res.render('login')
    },
    register: (req, res) => {
        res.render('register')
    },
    registerConfirm:(req,res)=>{
        
        db.Usuario.create({
            nombre:req.body.completeName,
            email:req.body.email,
            contrasenia:req.body.password,
            fdn:req.body.birthdate,
            rol_id:2
                })
            .then(()=>{
                res.render('index')
            })
    },
    loginConfirm:(req,res)=>{
        
        db.Usuario.findOne({ where:{email : req.body.user }})
        .then(user =>{ 
            console.log(user.contrasenia)
            if(user.email != ""){
                if (req.body.psw == user.contrasenia) {
                    console.log("inicio sesion")
                    res.redirect("/")
                }
                else{
                    console.log("error")
                    res.redirect("/login")
                }

            } 
        })
        
    }

}
module.exports = controller