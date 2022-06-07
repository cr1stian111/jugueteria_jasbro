$(function() {

 
  $("form[name='formulario_editar_producto']").validate({

    rules: {

      nombre: "required",

      precio: "required",

      categoria: "required",

      stock: "required"

    },

    // Specify validation error messages

    messages: {

      nombre: " Por favor, introduzca nombre correctamente",

      precio: " Por favor, introduzca precio correctamente",

      categoria: " Por favor, introduce una categoria correctamente",

      stock: " Por favor, ingrese stock correctamente"
    },

    submitHandler: function(form) {

      form.submit();

    }

  });

});

/*
function validaEdicion(){
  alert("aqui validando ando")
}

function validaTodoEdicion(){
    console.log("valida todo edicion")
    
    return validaNombreProducto();
}

function validaNombreProducto(){
    var nombre = document.getElementById("nombre");
    var span = document.getElementById("msje_nombre");
    if (nombre.value.length> 0){
        if(nombre.value.length<=40){
            return true;
        }
    }else{
        alert("Escriba el nombre del producto");
        //span.className = "fail";
        return false;
    }
}


*/