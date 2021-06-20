//ARRAY AL QUE SE LE ASIGNAN LOS PRODUCTOS
let listaProductos = [];
DATOS.forEach(item => listaProductos.push(new Producto(item)));

//VERIFICAMOS POR CONSOLA QUE TODOS LOS PRODUCTOS SE HAYAN CARGADO CORRECTAMENTE
$().ready(()=>{
  console.log("TODO CARGADO!")
})
//console.log(listaProductos);

let carrito = new CarritoDeCompras();
//MOSTRAMOS EL CARRITO POR CONSOLA
console.log(carrito)

//OBTENCIÓN DEL DIV MEDIANTE ID
let contenedorPadre = document.getElementById("contenidoGenerado");

//GENERAR CARD PARA CADA PRODUCTO
$(listaProductos.forEach(item => {
    $(`#contenidoGenerado`).prepend(item.cardHTML())
}))

//DESPLEGAR CARRITO
$("#dropdownMenuButton").click(function (e) { 
    $("#botoncarrito").toggle();      
  });
