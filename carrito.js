// Accesos como cliente generico
accesoGenerico = { usuario: "pepe", clave: "123456" };

let { usuario, clave } = accesoGenerico;

//selectores
const agregarLogin = document.querySelector(".inicioDeSesion");
const agregarCierreSesión = document.querySelector(".cierreDeSesion");
const cargaLogin = document.querySelector(".accesoWeb");
const cerrarLogin = document.querySelector("#regresarOSalir");
const alertaSinAcceso = document.querySelector(".accesoNegado");
const interactuarLogin = document.querySelector(".accesoWeb");
//boton inicio de sesión apertura login
agregarLogin.addEventListener("click", () => {
  cargaLogin.classList.add("visibleLogin");
});

//boton cierre de formulario login en x
cerrarLogin.addEventListener("click", () => {
  cargaLogin.classList.remove("visibleLogin");
  alertaSinAcceso.classList.remove("alertaAcceso");
});

//Registro de información en login
const inputRegistroUsuario = document.getElementById("nombreEnLogin");
const inputClave = document.getElementById("claveAcceso");

const botonIngreso = document.getElementById("ingresarAlComercio");
const botonRegresar = document.getElementById("regresarOSalir");
//inicio de sesión
botonIngreso.addEventListener("click", (event) => {
  event.preventDefault();

  const registroUsuario = inputRegistroUsuario.value;
  const claveRegistroUser = inputClave.value;

  if (registroUsuario === usuario && claveRegistroUser === clave) {
    localStorage.setItem("user", registroUsuario);
    localStorage.setItem("clave", claveRegistroUser);

    interactuarLogin.classList.remove("visibleLogin");
    agregarCierreSesión.classList.remove("off");
    agregarLogin.classList.add("off");
    alertaSinAcceso.classList.remove("alertaAcceso");
  } else {
    alertaSinAcceso.classList.add("alertaAcceso");
  }
});

//Cierre de sesión y borrado de datos storage
agregarCierreSesión.addEventListener("click", (event) => {
  event.defaultPrevented;

  confirm("¿Seguro que desea salir de su sesión?");

  agregarCierreSesión.classList.add("off");
  agregarLogin.classList.remove("off");

  localStorage.removeItem("user");
  localStorage.removeItem("clave");
});

//lo que traigo del local Storage

const datosLocalStorage = [];

for (let i = 0; i < localStorage.length; i++) {
  let clave = localStorage.key(i);
  let primerDato = clave;
  let segundoDato = localStorage.getItem(clave);

  numeroId = JSON.parse(primerDato);
  productoAgregado = JSON.parse(segundoDato);

  datosLocalStorage.push({ numeroId, productoAgregado });
}

// Desestructuramos el array y luego el objeto dentro del array
for (let { numeroId, productoAgregado } of datosLocalStorage) {
  // Aquí puedes usar numeroId y productoAgregado
  console.log(numeroId, productoAgregado);
}

//Section en carrito
const nuevaVenta = document.querySelector("#ventaACliente");

for (let { productoAgregado } of datosLocalStorage) {
  let vistaCarrito = document.createElement("article");
  vistaCarrito.classList.add("tarjetas");
  vistaCarrito.innerHTML = `
    <h3>${productoAgregado.nombre}</h3>
    <img src=../${productoAgregado.img} alt="productoSeleccionado">
    <ul>
      <li>Precio: ${productoAgregado.precio} usd</li>
      <li>Unidades disponibles: ${productoAgregado.stock}</li>
    </ul>
    <p>${productoAgregado.resumen}</p>
    `;
  nuevaVenta.appendChild(vistaCarrito);
}
