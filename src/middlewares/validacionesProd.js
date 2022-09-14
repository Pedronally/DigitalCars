const { body } = require("express-validator");
const fs = require("fs");

module.exports = [

    body("modelo").notEmpty().withMessage("El modelo tiene que estar completo!").isLength({min:2, max:50}).withMessage("El modelo debe tener entre 2 y 50 caracteres"),
    body("precio").notEmpty().withMessage("El auto tiene que tener precio!").isFloat({min:10, max:30000}).withMessage(""),
    body("anio").notEmpty().withMessage("El auto tiene que especificar anio!").isInt({min:0}).withMessage("El auto no puede ser anio 0!")
    
]