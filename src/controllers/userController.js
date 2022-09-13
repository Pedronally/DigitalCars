const path = require("path");
const db = require("../database/models");

const controller = {

    login: (req, res) => {
        res.render('login')
    },
    register: (req, res) => {

        res.render('register')
    },
    registerConfirm:(req,res)=>{
        console.log(req.body)
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
    } 

}
module.exports = controller