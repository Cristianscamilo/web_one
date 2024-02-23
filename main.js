/////////////// Simulador de compra y login///////////////

// Accesos como cliente generico
accesoGenerico = { usuario: "pepe", clave: "123456" };

let { usuario, clave } = accesoGenerico;

//Constructor Celulares para venta al publico
class Celular {
  constructor(id, nombre, precio, stock, almacenamiento, ram, resumen, img, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.almacenamiento = almacenamiento;
    this.ram = ram;
    this.resumen = resumen;
    this.img = img;
    this.cantidad = cantidad
  }
}
//Celulares disponibles
const cel1 = new Celular(
  101,
  "Celular iphone 15 6.1",
  799,
  100,
  "128 GB",
  "6 GB",
  "Descubre el nuevo iPhone, con diseño de titanio aeroespacial, chip A17 Pro revolucionario y sistema de cámaras potente. ¡Atrévete a la innovación, consigue el tuyo ahora!",
  "img/iphone_15.jpg",
  0
);
const cel2 = new Celular(
  102,
  "Celular Samsung Galaxy S24 Ultra 6.8",
  1581,
  50,
  "512 GB",
  "12 GB",
  "¡Descubre el poder del nuevo Galaxy S24 Plus 5G! Llévalo ahora",
  "img/samsunggalaxys24ultra6.8.jpg",
  0
);
const cel3 = new Celular(
  103,
  "Celular Xiaomi Poco X5 PRO 5G",
  289,
  200,
  "256 GB",
  "8 GB",
  "ofrece un excelente rendimiento para la gama con una experiencia Android a muy buen nivel",
  "img/Xiaomi-Poco-x5-Pro-5g-Colores.jpg",
  0
);
const cel4 = new Celular(
  104,
  "Celular HUAWEI P60 Pro",
  1079,
  35,
  "256 GB",
  "8 GB",
  "Huawei P60 Pro: el nuevo teléfono inteligente de alto rendimiento de Huawei",
  "img/huaweip60pro.png",
  0
);

//Array con celulares
const listaMoviles = [cel1, cel2, cel3, cel4];

//Constructor Monitores para venta al publico
class Monitor {
  constructor(
    id,
    nombre,
    pulgada,
    esCurvo,
    precio,
    stock,
    resumen,
    img,
    cantidad
  ) {
    this.id = id;
    this.nombre = nombre;
    this.pulgada = pulgada;
    this.esCurvo = esCurvo;
    this.precio = precio;
    this.stock = stock;
    this.resumen = resumen;
    this.img = img;
    this.cantidad = cantidad;
  }
}
//Monitores disponibles
const monitor1 = new Monitor(
  201,
  "Monitor HUAWEI MateView GT 34 pulgadas Con Barra de Sonido",
  34,
  true,
  664,
  40,
  "Alta frecuencia de actualización y Color cinematográfico",
  "img/huaweimategt34.png",
  0
);
const monitor2 = new Monitor(
  202,
  'Monitor Samsung LED de 24" con panel IPS y diseño sin bordes',
  24,
  false,
  150,
  16,
  "Vista totalmente inmersiva, Más potencia para juegos",
  "img/samsung24conpanelips.jpg",
  0
);
const monitor3 = new Monitor(
  203,
  'Monitor LG Gamer 24" Pulgadas 24GN65R Negro',
  24,
  false,
  144,
  10,
  "tecnología AMD FreeSync brinda  movimiento fluido y sin interrupciones en alta resolución en los juegos",
  "img/monitorlgnegro24gamer.jpg",
  0
);
const monitor4 = new Monitor(
  204,
  'Monitor SAMSUNG 49" Pulgadas OLED CG930 Pl',
  49,
  true,
  2018,
  14,
  "Pantalla curva que se adapta completamente al contorno del ojo humano",
  "img/monitorsamsung49cg930.jpg",
  0
);

//Array con Monitores
const listaMonitores = [monitor1, monitor2, monitor3, monitor4];

//Constructor Audifonos para venta al publico
class Audifono {
  constructor(id, nombre, precio, stock, esInalambrico, resumen, img, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.esInalambrico = esInalambrico;
    this.resumen = resumen;
    this.img = img;
    this.cantidad = cantidad;
  }
}
//Audifonos disponibles
const audifono1 = new Audifono(
  301,
  "Audifonos Diadema Bose Noise Cancelling Headphones 700 Blueto Color Black",
  414,
  20,
  true,
  "El diseño over-ear genera una comodidad insuperable, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.",
  "img/audifonodiademabosenoisecancellingheadphones700bluetocolorblack.jpg",
  0
);
const audifono2 = new Audifono(
  302,
  "Audifonos gamer inalámbricos Logitech G Series G733 blanco con luz rgb LED",
  174,
  20,
  true,
  " Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida.",
  "img/audífonosgamerinalámbricoslogitechgseriesg733blancoluz.jpg",
  0
);
const audifono3 = new Audifono(
  303,
  "Audifonos Diadema Bt Cancelación Ruido Anc Klip Xtreme Oasis Knh-050bk",
  35.79,
  40,
  true,
  "Crea tu propio mundo de sonido con estos audifonos que ofrecen Cancelación de Ruido Activa (ANC)",
  "img/diademabtcancelaciónruidoancklipxtremeoasisknh-050bk.jpg",
  0
);
const audifono4 = new Audifono(
  304,
  "Audifonos Sony Con Funcion De Manos Libres - Mdr-zx310ap Color Negro",
  20,
  40,
  false,
  "Al ser on-ear se apoyan en tus orejas cómodamente y ofrecen una gran calidad de sonido.",
  "img/sonyfonfunciondemanoslibres.jpg",
  0
);
const audifono5 = new Audifono(
  305,
  "Audifonos Alámbricos Diadema Gamer Rgb Controlador Luces #1",
  71.69,
  25,
  false,
  "Perfecto para toda ocasión y cualquier plataforma, audífono diseñado con tu comodidad en mente",
  "img/audifonoalámbricodiademagamerrgbcontroladorluces1.jpg",
  0
);

//Array con Audifonos
const listaAudifonos = [audifono1, audifono2, audifono3, audifono4, audifono5];
//Lista de los productos del negocio a la venta
let listadoProductosStore = listaMoviles.concat(listaMonitores, listaAudifonos);

//selectores
const agregarLogin = document.querySelector(".inicioDeSesion");
const agregarCierreSesión = document.querySelector(".cierreDeSesion");
const cargaLogin = document.querySelector(".accesoWeb");
const cerrarLogin = document.querySelector("#regresarOSalir");
const alertaSinAcceso = document.querySelector(".accesoNegado");
const interactuarLogin = document.querySelector(".accesoWeb");

//objetos: listaMoviles listaMonitores listaAudifonos

const sectionCelulares = document.querySelector("#listaCelulares");

for (const movil of listaMoviles) {
  let vistaProductosMobile = document.createElement("article");
  vistaProductosMobile.classList.add("tarjetas");
  vistaProductosMobile.innerHTML = `

  <h3>${movil.nombre}</h3>
  <img src=${movil.img} alt="celular">
  <ul>
      <li>Precio: ${movil.precio}</li>
      <li>Unidades disponibles: ${movil.stock}</li>
      <li>Memoria interna: ${movil.almacenamiento}</li>
      <li>Memoria Ram:${movil.ram}</li>
  </ul>
  <p>${movil.resumen}</p>
      <button type="button" id=${movil.id} class="comprarUnidad">Agregar al carrito</button>
`;
  sectionCelulares.appendChild(vistaProductosMobile);
}

const sectionMonitores = document.querySelector("#listaMonitores");

for (const monitor of listaMonitores) {
  let vistaProductosMonitores = document.createElement("article");
  vistaProductosMonitores.classList.add("tarjetas");
  vistaProductosMonitores.innerHTML = `

                    <h3>${monitor.nombre}</h3>
                    <img src=${monitor.img}>
                    <ul>
                        <li>Precio: ${monitor.precio} usd </li>
                        <li>Pulgadas: ${monitor.precio}</li>
                        <li>Curvo: ${monitor.esCurvo}</li>
                        <li>Unidades disponibles: ${monitor.stock}</li>
                    </ul>
                    <p>${monitor.resumen}</p>
                    <button type="button" id=${monitor.id} class="comprarUnidad">Agregar al carrito</button>
  
`;
  sectionMonitores.appendChild(vistaProductosMonitores);
}

const sectionAudifonos = document.querySelector("#listaAudifonos");

for (const audifono of listaAudifonos) {
  let vistaProductosAudifonos = document.createElement("article");
  vistaProductosAudifonos.classList.add("tarjetas");
  vistaProductosAudifonos.innerHTML = `

  <h3>${audifono.nombre}</h3>
  <img src=${audifono.img} alt="audifonos">
  <ul>
      <li>Precio: ${audifono.precio} usd</li>
      <li>Inhalambrico: ${audifono.esInalambrico}</li>
      <li>Unidades disponibles: ${audifono.stock}</li>
  </ul>
  <p>${audifono.resumen}</p>
      <button type="button" id=${audifono.id} class="comprarUnidad">Agregar al carrito</button>
  
`
  sectionAudifonos.appendChild(vistaProductosAudifonos);
}

//Barra de busqueda

function buscarProducto(nombre) {
  return listadoProductosStore.filter((producto) =>
    producto.nombre.toLowerCase().includes(nombre.toLowerCase())
  );
}
//input y boton
const busquedaUsuario = document.querySelector("#busqueda");
const botonBuscar = document.querySelector("#botonBuscar");

//h3 y cuerpo de seccion de busqueda
const sectionBusqueda = document.querySelector("#listaBusqueda");


const busquedasEnWeb = document.querySelector(".tituloBusqueda");

//Evento con boton buscar
botonBuscar.addEventListener("click", () => {
  let informacionBusqueda = busquedaUsuario.value.trim().toLowerCase();

  if (informacionBusqueda !== "") {
    let resultadosBusqueda = buscarProducto(informacionBusqueda);

    if (resultadosBusqueda.length > 0) {
      busquedasEnWeb.classList.add("on");
      for (const resultado of resultadosBusqueda) {
        let vistaBusqueda = document.createElement("article");
        vistaBusqueda.classList.add("tarjetas");

        vistaBusqueda.innerHTML = `
  
    <h3>${resultado.nombre}</h3>
    <img src=${resultado.img} alt="celular">
    <ul>
        <li>Precio: ${resultado.precio}</li>
        <li>Unidades disponibles: ${resultado.stock}</li>
        <button type="button" id=${resultado.id} class="comprarUnidadB">Agregar al carrito</button>
        `;
        sectionBusqueda.appendChild(vistaBusqueda);

        const opcionComprarU = document.querySelectorAll(".comprarUnidadB")

          opcionComprarU.forEach((boton) => {
            boton.addEventListener("click", elClick);
          }) 
      }
    } else {
      busquedasEnWeb.classList.add("on");
      sectionBusqueda.innerHTML = "<p>No se encontraron coincidencias.</p>";
    }
  } else {
    busquedasEnWeb.classList.remove("on");
    sectionBusqueda.innerHTML = "";
  }
});

//Evento con tecla enter en input
busquedaUsuario.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();

    let valorbusqueda = event.target.value.trim().toLowerCase();

    if (valorbusqueda !== "") {
      let informacionBusquedaEnter = buscarProducto(valorbusqueda);

      if (informacionBusquedaEnter.length > 0) {
        busquedasEnWeb.classList.add("on");
        for (const resultado of informacionBusquedaEnter) {
          let vistaBusqueda = document.createElement("article");
          vistaBusqueda.classList.add("tarjetas");

          vistaBusqueda.innerHTML = `
  
    <h3>${resultado.nombre}</h3>
    <img src=${resultado.img} alt="productoBusqueda">
    <ul>
        <li>Precio: ${resultado.precio}</li>
        <li>Unidades disponibles: ${resultado.stock}</li>
        <button type="button" id=${resultado.id} class="comprarUnidadB">Agregar al carrito</button>
    `;
          sectionBusqueda.appendChild(vistaBusqueda);

          const opcionComprarU = document.querySelectorAll(".comprarUnidadB")

          opcionComprarU.forEach((boton) => {
            boton.addEventListener("click", elClick);
          })

        }
      } else {
        busquedasEnWeb.classList.add("on");
        sectionBusqueda.innerHTML = "<p>No se encontraron coincidencias.</p>";
      }
    } else {
      busquedasEnWeb.classList.remove("on");
      sectionBusqueda.innerHTML = "";
    }
  }
});

//array carrito de compras
let carritoDeCompras = [];

//Cargar al localStorage informacion en JSON

const guardarEnStorage = (clave, valor) => {
  localStorage.setItem(clave, valor);                    
};

//Función para usar.push al carrito
function agregarAlCarrito(nuevoProducto) {
  guardarEnStorage(nuevoProducto.id, JSON.stringify(nuevoProducto));////////
}

//sumar Unidad
function adicionarUnidad(objet){ 
objet.cantidad++
return objet.cantidad
}

//Funcion para busqueda exacta de productos por id
function buscarproductoPorId(id) {
  const numeroId = parseInt(id);
  let respuesta = listadoProductosStore.find((producto) => producto.id === numeroId)
  
  if (respuesta) {
    adicionarUnidad(respuesta); // Incrementar la cantidad del producto encontrado
  } else {
    console.log(`Producto con ID ${numeroId} no encontrado`);
  }
  return respuesta;  
}





//interacción de la compra
const botonesDeCompra = document.querySelectorAll(".comprarUnidad");

function elClick(evento) {
  const idBoton = evento.target.id;
  let buscarPorId = buscarproductoPorId(idBoton);
  //Agregar al carro lo que el cliente selecciona
  agregarAlCarrito(buscarPorId);
  setTimeout(() => {
    window.location.reload();
  }, 1000);
}

botonesDeCompra.forEach((boton) => {
  boton.addEventListener("click", elClick);
})




//lo que traigo del local Storage

const datosLocalStorage = [];

let productoAgregado
let numeroId 

for (let i = 0; i < localStorage.length; i++) {
  let clave = localStorage.key(i);
  let primerDato = clave;
  let segundoDato = localStorage.getItem(clave);

  numeroId = JSON.parse(primerDato);
  productoAgregado = JSON.parse(segundoDato);

  datosLocalStorage.push({ numeroId, productoAgregado });
}


//icono carrito


const numeroEnCarrito = document.querySelector(".cantidadAlCarrito")

let contadorElementosCar = datosLocalStorage.length


function actualizarLogoCarrito(elementosEnCarro){
  if (elementosEnCarro > 0) {
    numeroEnCarrito.innerText = `${elementosEnCarro}`
  }
}

actualizarLogoCarrito(contadorElementosCar)


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
