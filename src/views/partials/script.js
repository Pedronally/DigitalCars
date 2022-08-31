const e = require("express");

window.addEventListener("load", function(){

    let formulario = document.querySelector("form-registro");

    formulario.addEventListener("submit", function(e){
        e.preventDefault();

        let campoNombre = document.querySelector("input.name");

        if(campoNombre.value == ""){
            alert("El campo debe estar completo")
        }
    })
})