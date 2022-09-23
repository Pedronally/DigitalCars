
window.addEventListener("load", function(){


    let formularioLogin = document.querySelector("create-form-login");


    

formularioLogin.addEventListener("submit", function(e){
    e.preventDefault();

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
});
