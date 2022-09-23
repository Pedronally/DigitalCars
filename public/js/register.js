window.addEventListener("load", function(){
    

    let formularioRegister = document.querySelector("create-formu");

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

});