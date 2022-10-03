/*
window.addEventListener("load", function(){
    

    let formularioRegister = document.querySelector(".create-formu-register");

    formularioRegister.addEventListener("submit", function(e){
        e.preventDefault();

        let campoNombre = document.querySelector("input.name");

        if(campoNombre.value == ""){
            swal("Oops!", "Introduce un nombre!", "error");
        } else if (campoNombre.value.length <= 2) {
            swal("Oops!", "El nombre debe tener al menos 2 caracteres!", "error");
        }
        
        let campoUser = document.querySelector("input.mail");
        emailRegex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
        if (!emailRegex.test(campoUser.value)) {
            swal("Oops!", "Email inexistente!", "error");
        } else if(campoUser.value == ""){
            swal("Oops!", "El email debe estar completo!", "error");
        } 

        //Poner validación de Imagen
        
        let campoPsw = document.querySelector("input.psw");

        if(campoPsw.value == ""){
            swal("Oops!", "Se necesita una contraseña!", "error");
        } else if (campoPsw.value.length <= 8) {
            swal("Oops!", "La contraseña debe tener al menos 8 caracteres", "error");
        }

      
    })

});
*/