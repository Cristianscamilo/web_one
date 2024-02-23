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
const numeroEnCarrito = document.querySelector(".cantidadAlCarrito");
const seccionVentaDelProducto = document.querySelector(".ventaPRoductos");
const btnComprar = document.querySelector(".irAPago");
const btnPAgar = document.querySelector("#pagoCarrito");

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
  //Login
  if (registroUsuario === usuario && claveRegistroUser === clave) {
    sessionStorage.setItem("user", registroUsuario);
    sessionStorage.setItem("clave", claveRegistroUser);

    interactuarLogin.classList.remove("visibleLogin");
    agregarCierreSesión.classList.remove("off");
    agregarLogin.classList.add("off");
    alertaSinAcceso.classList.remove("alertaAcceso");
    //Se activo opcion de compra
    btnComprar.classList.add("btnActivo");
    btnComprar.addEventListener("click", agregarSeccionPAgo);
  } else {
    alertaSinAcceso.classList.add("alertaAcceso");
  }
});

//Habilitación de opción de compra, solo si el Login es exitoso
function agregarSeccionPAgo() {
  seccionVentaDelProducto.classList.add("conAcceso");
}

//Cierre de sesión y borrado de datos storage
agregarCierreSesión.addEventListener("click", (event) => {
  event.defaultPrevented;

  /// confirm("¿Seguro que desea salir de su sesión?");           se debe agregar con la libreria

  agregarCierreSesión.classList.add("off");
  agregarLogin.classList.remove("off");

  sessionStorage.removeItem("user");
  sessionStorage.removeItem("clave");
  btnComprar.classList.remove("btnActivo");
  seccionVentaDelProducto.classList.remove("conAcceso");
});
///Pago y cierre de venta
btnPAgar.addEventListener("click", limpiarStorageLocal)

function limpiarStorageLocal() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: "Gracias por tu compra!"
  });
  setTimeout(() => {
    window.location.reload();
  }, 4000);
  localStorage.clear()
}

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

let [primerObjeto, segundoObjeto] = datosLocalStorage;

//Selector de botones
const cantidadEnPAntalla = document.querySelectorAll(".cantidadEnPantalla");
const btnSumarUnidad = document.querySelectorAll(".adicionarUnidad");

//Section en carrito
const nuevaVenta = document.querySelector("#ventaACliente");

for (let { productoAgregado } of datosLocalStorage) {
  let vistaCarrito = document.createElement("article");
  vistaCarrito.classList.add("tarjetas");
  vistaCarrito.innerHTML = `
    <button class="eliminarDelCarrito" id="${productoAgregado.id}">❌</button>
    <h3>${productoAgregado.nombre}</h3>
    <img src=../${productoAgregado.img} alt="productoSeleccionado">
    <ul>
      <li>Precio: ${
        productoAgregado.precio * productoAgregado.cantidad
      } usd</li>
      <li>Unidades disponibles: ${productoAgregado.stock}</li>
    </ul>
    <p>${productoAgregado.resumen}</p>
    <div>
    <button class="restarUnidad" id="${productoAgregado.id}">-</button>
    <span class="cantidadEnPantalla">${productoAgregado.cantidad}</span>
    <button class="adicionarUnidad" id="${productoAgregado.id}">+</button>
    
    </div>
    `;
  nuevaVenta.appendChild(vistaCarrito);

  const btnSumarUnidad = document.querySelectorAll(".adicionarUnidad");
  const btnrestarUnidad = document.querySelectorAll(".restarUnidad");
  const btnBorrarDelCarrito = document.querySelectorAll(".eliminarDelCarrito");

  btnSumarUnidad.forEach((boton) => {
    boton.addEventListener("click", identificadorBtnsuma);
  });

  btnrestarUnidad.forEach((boton) => {
    boton.addEventListener("click", identificadorBtnresta);
  });

  btnBorrarDelCarrito.forEach((boton) => {
    boton.addEventListener("click", identificadorParaBorrarItem);
  });
}

//funcion selector y suma de unidad

function identificadorBtnsuma(evento) {
  const idBtnSuma = parseInt(evento.target.id);
  let buscarID = producIdsacadoStorageSuma(idBtnSuma);
  agregarAlCarrito(buscarID);
}

//funcion selector y resta de unidad

function identificadorBtnresta(evento) {
  const idBtnSuma = parseInt(evento.target.id);
  let buscarID = producIdsacadoStorageResta(idBtnSuma);
  agregarAlCarrito(buscarID);
}

//Funcion de busqueda y suma

function producIdsacadoStorageSuma(numeroId) {
  let respuesta = datosLocalStorage.find(
    (producto) => producto.numeroId === numeroId
  );
  if (respuesta.productoAgregado.cantidad < respuesta.productoAgregado.stock) {
    respuesta.productoAgregado.cantidad++;
    return respuesta.productoAgregado;
  }
}

//Funcion de busqueda y resta

function producIdsacadoStorageResta(numeroId) {
  let respuesta = datosLocalStorage.find(
    (producto) => producto.numeroId === numeroId
  );
  if (respuesta.productoAgregado.cantidad > 1) {
    respuesta.productoAgregado.cantidad--;
    return respuesta.productoAgregado;
  }
}

//Cargar al localStorage informacion en JSON
const guardarEnStorage = (clave, valor) => {
  localStorage.setItem(clave, valor);
};

//Funcion de busqueda y eliminacion de item
function identificadorParaBorrarItem(evento) {
  const idABorrar = parseInt(evento.target.id);
  localStorage.removeItem(idABorrar);
  setTimeout(() => {
    window.location.reload();
  }, 0);
}

//Función para usar.push al carrito
function agregarAlCarrito(nuevoProducto) {
  guardarEnStorage(nuevoProducto.id, JSON.stringify(nuevoProducto));
  setTimeout(() => {
    window.location.reload();
  }, 0);
}

//icono carrito
let contadorElementosCar = datosLocalStorage.length;

function actualizarLogoCarrito(elementosEnCarro) {
  if (elementosEnCarro > 0) {
    numeroEnCarrito.innerText = `${elementosEnCarro}`;
  }
}
actualizarLogoCarrito(contadorElementosCar);

//Funcion Resumen de compra segun array

const resumenCompra = document.querySelector("#itemsComprados");

function comprarProductosCarrito() {
  for (let { productoAgregado } of datosLocalStorage) {
    let detallesPago = document.createElement("tr");
    detallesPago.classList.add("resumenCompra");
    detallesPago.innerHTML = `
        <td>${productoAgregado.nombre}</td>
        <td>${productoAgregado.cantidad}</td>
        <td>${productoAgregado.precio}</td>
        <td>${productoAgregado.precio * productoAgregado.cantidad}</td>  
  `;
    resumenCompra.appendChild(detallesPago);
  }
}

comprarProductosCarrito(); /////////////////////////////

//Funcion total a pagar

const valorTotalDePago = document.getElementById("total");

function PagoTotal() {
  let valorTotal = datosLocalStorage.reduce((acumulador, dato) => {
    return (
      acumulador + dato.productoAgregado.precio * dato.productoAgregado.cantidad
    );
  }, 0);

  valorTotalDePago.innerText = `${valorTotal.toFixed(0)}`;
}

PagoTotal(); ////////////////////////////////////////////


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