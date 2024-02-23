//Consumo de API
/*

https://fakestoreapi.com/
https://fakestoreapi.com/products/category/electronics
*/

const link = "https://fakestoreapi.com/products";

fetch(link)
  .then((res) => res.json())
  .then((data) => {
    const categorias = data;
    const nuevosproductos = document.getElementById(
      "listaPRoductoPorCategoria"
    );
    categorias.forEach((producto) => {
      const nuevoItem = document.createElement("article");
      nuevoItem.classList.add("nuevoProducto");
      nuevoItem.innerHTML = `
        <h3>${producto.category}</h3>
        <h4>${producto.title}</h4>
        <img src="${producto.image}" alt="Imagen Producto">
        <p>${producto.description}</p>
        <p class="precioDolares">Valor actual en mercado: ${producto.price} usd</p>
        <span class="proximo">proximamente en el negocio<span>
        `;
      nuevosproductos.appendChild(nuevoItem);
    })
  })
  .catch((error) => {
    console.log("Ocurrió un error:", error);
    console.log("Por favor, verifica la URL: https://fakestoreapi.com");
  });


  //suscripcion

const suscripcionNEws = document.getElementById("suscripcion")

suscripcionNEws.addEventListener("click", (event)=>{
  event.preventDefault()
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Te has suscrito al Newsletter",
    showConfirmButton: false,
    timer: 2000
  });
})