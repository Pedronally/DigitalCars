const { body } = require("express-validator");
const fs = require("fs");

module.exports = [

    body("modelo").notEmpty().withMessage("El modelo tiene que estar completo!").isLength({min:2, max:50}).withMessage("El modelo debe tener entre 2 y 50 caracteres"),
    body("precio").notEmpty().withMessage("El auto tiene que tener precio!").isFloat({min:10, max:30000}).withMessage(""),
    body("anio").notEmpty().withMessage("El auto tiene que especificar anio!").isInt({min:1990, max:2022}).withMessage("El auto ingrese un anio valido"),
    body("color_id").notEmpty().withMessage("Ingrese un color!"),
    body("image").notEmpty().custom((value, {req}) => {
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
    })
    
]