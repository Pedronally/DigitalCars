const { body } = require("express-validator");
const fs = require("fs");

module.exports = [


    
    body("email").notEmpty().withMessage("El correo no puede ser vacio").isEmail({min:2, max:50}).withMessage("ingrese un correo valido!"),
    body("contrasenia").notEmpty().withMessage("La contrasenia no puede ser vacia").isLength({min:2, max:50}).withMessage("ingrese una contrasenia valida!"),
    

   /*  
    body("image").custom((value, {req}) => {
        let file = req.file
        let acceptedExtensions = [".jpg", ".png", ".gif", ".jpeg"]

        
        if (file == undefined) {
            throw new Error("Adjunte una image con formato: " + acceptedExtensions + " y peso máximo 10mb.")
        }
        else if (file.size > (1024 * 1024 * 10)) {
            fs.unlink(file.path, (err) => {
                if (err) {
                    console.log(err)
                }
            })
            throw new Error("Adjunte una image con formato: " + acceptedExtensions + " y peso máximo 10mb.")
        }
        return true
    })*/





]