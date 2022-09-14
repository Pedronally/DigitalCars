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
    },
    loginConfirm:(req,res)=>{
        const user = User.findOne({ where : {email : req.body.email }});
            if(user){
                if (req.body.psw == User.contrasenia) {
                    res.status(200)
                }

            } else{
                res.status(404).json({ error : "no existe usuario con el correo introducido" });
            }
    }

}
module.exports = controller