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
       const resultValidation = validationResult(req);
       console.log(resultValidation.errors)
       console.log(req.body)
       if(resultValidation.errors.length>0){
            res.render('register',{errors:resultValidation.mapped()})

        }else{
        db.Usuario.create({
            nombre:req.body.nombre,
            email:req.body.email,
            contrasenia:req.body.contrasenia,
            fdn:req.body.fdn,
            rol_id:2
                })
            .then(()=>{
                res.render('index')
            })
        }
    },
    loginConfirm:(req,res)=>{
        const resultValidation = validationResult(req.body);
        console.log(resultValidation.errors.length)
        console.log(req.body)
        //if(resultValidation.errors.length)
        db.Usuario.findOne({ where:{email : req.body.mail }})
        .then(user =>{
            console.log(user)
            if(user.email != ""){
                if (req.body.contrasenia == user.contrasenia) {
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