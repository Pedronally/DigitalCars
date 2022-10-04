window.addEventListener("load", function(){

        let formularioCreate = document.querySelector(".create-form");
        let campoModelo = document.getElementById("modelo");
        let campoPrecio = document.getElementById("precio");
        let campoAnio = document.getElementById("anio");
        let campoColor = document.getElementById("color_id");
        let errores = [];
        

    formularioCreate.addEventListener("submit", function(e){
       e.preventDefault();
       
      

    
     
        if(campoModelo.value == ""){
            errores.push("Introduce un nombre!")
        }  if(campoPrecio.value == 0){
            errores.push("El auto no puede valer 0!");
          
        } if(campoPrecio.value == ""){
            errores.push("Ingrese un precio!");    
        }
        if(campoColor.value == ""){
            errores.push("El auto debe especificar el Color!")  
        }
        console.log(errores)
        if (errores.length==0){
            swal("Ok","Producto agregado", "success").then(()=>{
                    
                formularioCreate.submit()
            })
              } else {
                  swal("Ooops!", "Completa los campos!", "error").then(()=>{
                    
                    formularioCreate.submit()
                })
                  
                
              }
        


              
   
   
    })
});