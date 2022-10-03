
window.addEventListener("load", function(){

    let formularioLogin = document.querySelector(".create-form-login");


    

formularioLogin.addEventListener("submit", function(e){
    e.preventDefault();

    let campoUser = document.querySelector("input.mail");
    emailRegex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
    if (!emailRegex.test(campoUser.value)) {
        swal("Oops!", "Email erroneo!", "error");
    } else if(campoUser.value == ""){
        swal("Ooops!", "Completa el campo!", "error");
    } 
 
    let campoPSW = document.querySelector("input.psw");

    if(campoPSW.value == ""){
        swal("Ooops!", "Introduce contraseña!", "error");
    }
    formularioLogin.submit();
})
});
