//Section en carrito
const nuevaVenta = document.querySelector("#ventaACliente");


for (let i = 0; i < localStorage.length; i++) {
  let clave = localStorage.key(i);
  let primerDato = clave;
  let segundoDato = localStorage.getItem(clave);

  //let devueltaAObjeto1 = JSON.parse(primerDato);
  let nuevasVentas = JSON.parse(segundoDato);

  
 
  for(const venta of nuevasVentas){
    let vistaCarrito = document.createElement("article")
    vistaCarrito.classList.add("carroDeCompra")
    vistaCarrito.innerHTML = `
    <h3>${venta.nombre}</>
    <div>Prueba</div>
    `
    vistaCarrito.appendChild(nuevaVenta);
  }
}