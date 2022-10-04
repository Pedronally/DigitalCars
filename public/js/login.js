
window.addEventListener("load", function(){

    let formularioLogin = document.querySelector(".create-form-login");


    

formularioLogin.addEventListener("submit", function(e){
    e.preventDefault();
    let errores = 0;

    let campoUser = document.querySelector("input.email");
    emailRegex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
    /*if (!emailRegex.test(campoUser.value)) {
        swal("Oops!", "Email erroneo!", "error");
    } else*/ 
    if(campoUser.value == ""){
        errores++;

       // swal("Ooops!", "Completa el campo!", "error");
    } 
 
    let campoPSW = document.querySelector("input.contrasenia");

    if(campoPSW.value == ""){
        errores++;
      //  swal("Ooops!", "Introduce contraseña!", "error");
    }
    if (errores==0){
  formularioLogin.submit()
    } else {
        swal("Ooops!", "Completa los campos!", "error").then(()=>{formularioLogin.submit()})
        
    }
})
});
