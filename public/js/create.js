/*const { default: swal } = require("sweetalert");

window.addEventListener("load", function(){

    let formularioCreate = document.querySelector(".create-form");

    formularioCreate.addEventListener("submit", function(e){
        e.preventDefault();
    
        let campoModelo = document.querySelector("input.modelo");
    
        if(campoModelo.value == ""){
            swal("Oops!", "Introduce un nombre!", "error");
        } else if(campoModelo.value.length <= 5){
            swal("El campo debe tener como mínimo 5 caracteres")
        }
    })
    
    let campoPrecio = document.querySelector("input.precio");

    if(campoPrecio.value == 0){
        swal("Oops!", "El auto no puede valer 0!", "error");    
}

    let campoAnio = document.querySelector("input.anio");

    if(campoPrecio.value == ""){
        swal("Oops!", "El auto debe especificar el Año!", "error");    
    }

    
    let campoColor = document.querySelector("input.color");

    if(campoColor.value == ""){
        swal("Oops!", "El auto debe especificar el Color!", "error");    
    }

});