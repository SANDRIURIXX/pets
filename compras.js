let carrito = []
let total = 0

function agregarItem(nombre, precio){
    carrito.push({nombre: nombre, precio: precio})
    total += precio
    ActualizarCarrito()
}

function ActualizarCarrito(){
    const carritoElement= document.getElementById('carrito');
    carritoElement.innerHTML = '';

    carrito.forEach((item) => {
        const li = document.createElement('li')
        li.innerText= `${item.nombre} - ${item.precio}`
        carritoElement.appendChild(li)
    });
    document.getElementById('total').innerText = total

}