//CONTROL DEL EVENTO
function manejadorEvento(evento) {
    //SUMAR AL CARRITO
    carrito.agregarItemCar(listaProductos.find(objeto => objeto.id == evento.target.id));

    //SE GENERA EL CARRITO
    $('#miCarrito').empty().html(carrito.tabla());
}
