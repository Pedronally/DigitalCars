const e = require("express");

window.addEventListener("load", function(){

    let formularioRegister = document.querySelector("form-registro");

    let formularioLogin = document.querySelector("form-login");

    let formularioCreateEdit = document.querySelector("create-form");

    formularioRegister.addEventListener("submit", function(e){
        e.preventDefault();

        let campoNombre = document.querySelector("input.name");

        if(campoNombre.value == ""){
            alert("El campo debe estar completo")
        } else if (campoNombre.value.length <= 2) {
            alert("El nombre debe tener al menos 2 caracteres")
        }

        let campoUser = document.querySelector("input.user");
        emailRegex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
        if (!emailRegex.test(campoUser.value)) {
            alert("El email es erroneo")
        } else if(campoUser.value == ""){
            alert("El campo debe estar completo")
        } 

        //Poner validación de Imagen
        
        let campoPSW = document.querySelector("input.psw");

        if(campoPSW.value == ""){
            alert("El campo debe estar completo")
        } else if (campoPSW.value.length <= 8) {
            alert("La contraseña debe tener al menos 8 caracteres")
        }
    })

formularioLogin.addEventListener("submit", function(f){
    f.preventDefault();

    let campoUser = document.querySelector("input.user");
    emailRegex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
    if (!emailRegex.test(campoUser.value)) {
        alert("El email es erroneo")
    } else if(campoUser.value == ""){
        alert("El campo debe estar completo")
    } 

    let campoPSW = document.querySelector("input.psw");

    if(campoPSW.value == ""){
        alert("El campo debe estar completo")
    }
})

formularioCreateEdit.addEventListener("submit", function(g){
    g.preventDefault();

    let campoModelo = document.querySelector("input.modelo");

    if(campoModelo.value == ""){
        alert("El campo debe estar completo")
    } else if(campoModelo.value.length <= 5){
        alert("El campo debe tener como mínimo 5 caracteres")
    }
})
})