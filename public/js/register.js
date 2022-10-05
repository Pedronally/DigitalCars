window.addEventListener("load", function () {
  let formularioRegister = document.querySelector("form");

  let campoNombre = document.querySelector("input.nombre");

  let campoUser = document.querySelector("input.email");
  let emailRegex =
    /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
  let campoPsw = document.querySelector("input.contrasenia");
  let errores = [];

  formularioRegister.addEventListener("submit", async (e) => {
    e.preventDefault();

    console.log("hola");

     if (campoNombre == "") {
      errores.push("Introduce un nombre!");
    } /*else if (campoNombre.value.length <= 2) {
      errores.push("El nombre debe tener al menos 2 caracteres!");
    }*/
    if (campoUser.value == "") {
      errores.push("El email debe estar completo!");
    } /*else if (!emailRegex.test(campoUser.value)) {
        errores.push("Email inexistente!");
      
    }*/
   
    if (campoPsw.value == "") {
        errores.push(" La contraseña debe tener al menos 8 caracteres");
      
    } /*else if (campoPsw.value.length <= 8) {
        errores.push("Se necesita una contraseña!");
   
    } */
    if (errores==0){
      formularioRegister.submit()
          } else {
              swal("Ooops!", "Completa los campos!", "error").then(()=>{formularioRegister.submit()})
              
          }
  });
});
