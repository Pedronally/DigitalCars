window.addEventListener("load", function(){

    let formularioCreate = document.querySelector("create-form");

    formularioCreate.addEventListener("submit", function(e){
        e.preventDefault();
    
        let campoModelo = document.querySelector("input.modelo");
    
        if(campoModelo.value == ""){
            alert("El campo debe estar completo")
        } else if(campoModelo.value.length <= 5){
            alert("El campo debe tener como mínimo 5 caracteres")
        }
    })
    })