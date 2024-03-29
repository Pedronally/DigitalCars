const { body } = require("express-validator");
const fs = require("fs");

module.exports = [



    body("nombre").notEmpty().withMessage("El nombre no puede ser vacio").isLength({min:2, max:50}).withMessage("ingrese un nombre valido!"),
    body("email").notEmpty().withMessage("El correo no puede ser vacio").isEmail({min:2, max:50}).withMessage("ingrese un correo valido!"),
    body("contrasenia").notEmpty().withMessage("La contrasenia no puede ser vacia").isLength({min:2, max:50}).withMessage("ingrese una contrasenia valida!"),
    body("fdn").notEmpty().withMessage("Ingrese una fecha de nacimiento"),
    body("image").custom((value, {req}) => {
        let file = req.file
        let acceptedExtensions = [".jpg", ".png", ".gif", ".jpeg"]

        
        if (file == undefined) {
            throw new Error("Adjunte una imagen")
        }
        else if (file.size > (1024 * 1024 * 100)) {
            fs.unlink(file.path, (err) => {
                if (err) {
                    console.log(err)
                }
            })
            throw new Error("Adjunte una imagen con formato: " + acceptedExtensions + " y peso máximo 10mb.")
        }
        return true
    })





]