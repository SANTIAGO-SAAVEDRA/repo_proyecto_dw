//ARRAY AL QUE SE LE ASIGNAN LOS PRODUCTOS
let listaProductos = [];
DATOS.forEach(item => listaProductos.push(new Producto(item)));

//VERIFICAMOS POR CONSOLA QUE TODOS LOS PRODUCTOS SE HAYAN CARGADO CORRECTAMENTE
console.log(listaProductos);

//
let carrito = new CarritoDeCompras();
console.log(carrito)


const PREFIJO = "IdProduct";
//OBTENCIÓN DEL DIV MEDIANTE ID
let contenedorPadre = document.getElementById("contenidoGenerado");

//CONTROL DEL EVENTO
function manejadorEvento(evento) {
    //SUMAR AL CARRITO
    carrito.agregarItemCar(listaProductos.find(objeto => objeto.id == evento.target.id));

    //SE GENERA EL CARRITO
    $('#miCarrito').empty().html(carrito.tabla());
}

//GENERAR CARD PARA CADA PRODUCTO
$(listaProductos.forEach(item => {
    $(`#contenidoGenerado`).prepend(item.cardHTML())
}))

//DESPLEGAR CARRITO
$("#dropdownMenuButton").click(function (e) { 
    $("#botoncarrito").toggle();      
  });

console.log(PREFIJO);
/*function crearElemento(dato) {
    let nuevoElemento = document.createElement("div");
    nuevoElemento.id = PREFIJO + dato.id;
    nuevoElemento.classList.add('card');
    nuevoElemento.innerHTML = `<img src=${dato.imagen} class="card-img-top" alt="...">
                              <div class="card-body">
                                <h5 class="card-title">${dato.nombre}</h5>
                                <p class="card-text">$${dato.precio}</p>
                                <button id="${dato.id}" class="botonCompra">AÑADIR AL CARRITO</button>
                            </div>`
    contenedorPadre.appendChild(nuevoElemento);
}*/

//$('card-text').append(`<h3>${dato.nombre}</h3>`)
//$('.card-title').append('<h5>PRUEBA</h5>')

//console.log(total);