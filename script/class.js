//DECLARACIÓN DE CLASE PRODUCTOS
class Producto {
    constructor(datos) {
        this.id = parseInt(datos.id);
        this.nombre = datos.nombre;
        this.precio = parseFloat(datos.precio);
        this.imagen = datos.imagen;
    }

    //SE GENERA LA CARD
    cardHTML()      {
            return      (`<div class="col-3"
                            <div class="card">
                                <img src="${this.imagen}" class="card-img-top">
                                <div class="card-body">
                                    <h5 class="card-title">${this.nombre}</h5>
                                    <p class="card-text">$${this.precio}</p>
                                    <button id="${this.id}" class="botonCompra" onclick = "manejadorEvento(event)">AÑADIR AL CARRITO</button>
                                </div>
                            </div>
                        </div>`
                        )
                    }
                }

//DECLARACIÓN DE CLASE CARRITO
class CarritoDeCompras{
    constructor(){
        this.bolsa = [];
    }
    //SE AGREGA EL ITEM AL CARRITO
    agregarItemCar(item){

        let indice = this.bolsa.findIndex(i => i.id == item.id);
        //SE CALCULA LA CANTIDAD
        if(indice != -1){
            this.bolsa[indice].cantidad++;
        }else{
        this.bolsa.push({...item, cantidad:1})
        }

        //Lo guarda en Local Storage
        this.guardarLocal();
    }

    //Se CALCULA la SUMA TOTAL
    sumaTotal(){
        //agregar cantidad
        return this.bolsa.reduce ( (p,i) => i.cantidad * i.precio + p , 0)
    }

    //DECLARACION DE LA TABLA
    tabla(){
        return (`<div id="divTabla">
                    <table id= "tabla">
                        <th>PRODUCTO</th><th>CANTIDAD</th><th>PRECIO</th>
                            ${this.bolsa.map(prod => 
                        `<tr>
                            <td>${prod.nombre}</td><td>${prod.cantidad}<td>$${prod.precio}</td>
                        </tr>`)}
                    </table>
                        <!--SE MUESTRA EL PRECIO TOTAL DEBAJO DE LA TABLA-->
                            <h2>Tu precio total hasta el momento es de: $${this.sumaTotal()}</h2>
                </div>`)
    }

    //SE GUARDAN LOS DATOS EN LOCAL STORAGE
    guardarLocal(){
        window.localStorage.setItem ('pproductos', JSON.stringify(carrito.bolsa))
    }
}

/*function generarSalida(productos) {
        let carritoo = document.getElementById('miCarrito');
        carritoo.innerHTML = '';
        let nuevoInner = '';
        nuevoInner += `<div id="divTabla">
                                <table id= "tabla">
                                    <th>PRODUCTO</th><th>PRECIO</th>`
        for (const producto of productos) {
            nuevoInner+=`<tr>
                                    <td>${producto.nombre}</td><td>$${producto.precio}</td>
                                        </tr>`
        }
        nuevoInner+=`</table>
                        </div>`
    
        //SE MUESTRA EL CARRITO
        carritoo.innerHTML = nuevoInner;
    }



    //SUMA DEL PRECIO
/*function sumarPrecio() {
    total = 0;
    CARRITO.forEach((dato) => {
        total += dato.precio;
    });
    console.log(total);
}*/

