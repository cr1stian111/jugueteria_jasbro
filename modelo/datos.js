class Datos{
    productos = [];
    categorias = [];
    contador_inicializaciones = 0; 

    constructor(){
        this.productos = [
            {codigo_producto:1, nombre:'Camion goliat',precio:15000, categoria:'Autos', stock:1},
            {codigo_producto:2, nombre:'Transformer - Optimus prime',precio:18000, categoria:'Autos', stock:4},
            {codigo_producto:3, nombre:'Barbie',precio:14000, categoria:'Muñecas', stock:20},
            {codigo_producto:4, nombre:'Pelota futbol adidas mediana',precio:24000, categoria:'Pelotas', stock:67}
        ];

        this.categorias = [
            {id_categoria:1, nombre_categoria:'autos', descripcion_categoria:'tienen ruedas'},
            {id_categoria:2, nombre_categoria:'muñecas', descripcion_categoria:'muñecas clasicas'},
            {id_categoria:3, nombre_categoria:'pelotas', descripcion_categoria:'pelotas deportivas de futbol, basketball, tenis'}
        ];

        this.clientes = [
           
            {id_cliente:1, nombre:'ana', apellido:'perez', rut:'123456', direccion:'123', telefono:'57348484'},
            {id_cliente:2, nombre:'pepe', apellido:'catalan', rut:'56789', direccion:'los lagos', telefono:'43434'},
            {id_cliente:3, nombre:'memo', apellido:'robles', rut:'65432', direccion:'los palotes', telefono:'76543'},
            {id_cliente:4, nombre:'pedro', apellido:'ruiz', rut:'545335', direccion:'volcanes 66', telefono:'23456'},
            {id_cliente:5, nombre:'juan', apellido:'soto', rut:'67893', direccion:'mundo infra', telefono:'6543'},
            {id_cliente:6, nombre:'luis', apellido:'gonzalez', rut:'456789', direccion:'tierra media', telefono:'2345678'},
            {id_cliente:7, nombre:'alan', apellido:'cito', rut:'4567839', direccion:'winterfell', telefono:'9876'},
            {id_cliente:8, nombre:'bryan', apellido:'terora', rut:'98765', direccion:'pais de nunca jamas', telefono:'345678'}
        ];

        this.ventas = [
            {id_venta:1, id_cliente:8, id_producto:4, cantidad:6, fecha:'11-01-2017',total:144000},
            {id_venta:2, id_cliente:7, id_producto:3, cantidad:1, fecha:'21-11-2017',total:14000},
            {id_venta:3, id_cliente:6, id_producto:2, cantidad:1, fecha:'01-04-2017',total:18000},
            {id_venta:4, id_cliente:5, id_producto:1, cantidad:2, fecha:'11-05-2017',total:30000}
        ];


        this.contador_inicializaciones += 1;
    }

    getProductos(){
        return this.productos;
    }

    getCategorias(){
        return this.categorias;
    }

    getClientes(){
        return this.clientes;
    }

    getVentas(){
        return this.ventas;
    }

    setProductos(posicion, nombre, precio, id_categoria, stock){
        this.productos[posicion].nombre = nombre;
        this.productos[posicion].precio = precio
        this.productos[posicion].id_categoria = id_categoria;
        this.productos[posicion].stock = stock;
    }
}

let datos = new Datos();



/**
* Funcion que captura las variables pasados por GET
* Devuelve un array de clave=>valor
*/
function getGET()
{
    // capturamos la url
    var loc = document.location.href;
    // si existe el interrogante
    if(loc.indexOf('?')>0)
    {
        // cogemos la parte de la url que hay despues del interrogante
        var getString = loc.split('?')[1];
        // obtenemos un array con cada clave=valor
        var GET = getString.split('&');
        var get = {};
        // recorremos todo el array de valores
        for(var i = 0, l = GET.length; i < l; i++){
            var tmp = GET[i].split('=');
            get[tmp[0]] = unescape(decodeURI(tmp[1]));
        }
        return get;
    }
}


function prueba(){

    window.location.href = "google.com";
    /*
    console.log("inicio funcion prueba");
    var codigo = document.getElementById("codigo").value;
    var nombre = document.getElementById("nombre");

    var precio = document.getElementById("precio").value;
    var categoria = document.getElementById("categoria");
    var stock = document.getElementById("stock").value;

    console.log(codigo+" "+ nombre +" "+ precio +" "+ categoria +" "+ stock)


    for(var i = 0; i < productos.length; i++) {
        if(productos[i].codigo_producto == codigo.value){
            productos[i].nombre = nombre;
            productos[i].precio = precio.value;
            productos[i].id_categoria = categoria;
            productos[i].stock = stock.value;
            break;
        }
    }
    alert("fin funcion editar");
    window.location.href = "producto.html";
    */
}

/*
function getFormData(){
   var config = {};
    $('input').each(function () {
     config[this.name] = this.value;
    });
    console.log(config['codigo']);

    for(var i = 0; i < productos.length; i++) {
        if(productos[i].codigo_producto == parseInt(config['codigo'])){
            alert("entre al if")
            productos[i].nombre = config['nombre'];
            productos[i].precio = parseInt(config['precio']);
            productos[i].id_categoria = parseInt(config['categoria']);
            productos[i].stock = parseInt(config['stock']);
            break;
        }
    }


}
*/