

/*

e-comerce

1 Tengo sección de productos en descuento pero toca crear objeto con esos productos puntuales

2 Requiuero listado de productos, podria clasificar tres lineas en arrays con objetos celulares, audifonos y pantallas
deben tener nombre, precio, descripción, alguna caracteristica muyt buena como ram, espacio de almacenamiento, pulgadas, cancelacion de ruido 
almenos tres caracteristicas o cuatro muy buenas

 3 ya no es compra directa en descuento se requieren dos lineas

     a. compra de productos en descuento
     b. compra de productos de lista segun categoria de celulares, pantallas o audifonos


4 crear menu 

 a los que seleccionan y se logean para comprar
 b los que se logearon y compraran directo 

*/


class Celular {
    constructor(id, nombre, precio, stock, almacenamiento, ram, resumen ) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock
        this.almacenamiento = almacenamiento;
        this.ram = ram
        this.resumen = resumen
    }
}



const cel1 = new Celular(101, 'iphone 15 6.1', 799, 100,'128 GB', '6 GB', 'Descubre el nuevo iPhone, con diseño de titanio aeroespacial, chip A17 Pro revolucionario y sistema de cámaras potente. ¡Atrévete a la innovación, consigue el tuyo ahora!')
const cel2 = new Celular(102, 'Samsung Galaxy S24 Ultra 6.8', 1581, 50, '512 GB', '12 GB', '¡Descubre el poder del nuevo Galaxy S24 Plus 5G! Llévalo ahora')
const cel3 = new Celular(103, 'Xiaomi Poco X5 PRO 5G', 289, 200,'256 GB','8 GB','ofrece un excelente rendimiento para la gama con una experiencia Android a muy buen nivel' )
const cel4 = new Celular(104, 'HUAWEI P60 Pro', 1079, 35,'256 GB', 'Huawei P60 Pro: el nuevo teléfono inteligente de alto rendimiento de Huawei')

const listaMoviles = []

function agregarCulularALista (celular) {
    listaMoviles.push(celular)
}

agregarCulularALista(cel1)
agregarCulularALista(cel2)
agregarCulularALista(cel3)
agregarCulularALista(cel4)

//console.log(listaMoviles[2].resumen)
        
class Monitor{
    constructor(id, nombre, pulgada,esCurvo, precio, stock, caracteristicaEspecial) {
        this.id = id;
        this.nombre = nombre;
        this.pulgada = pulgada;
        this.esCurvo = esCurvo;
        this.precio = precio;
        this.stock = stock;
        this.caracteristicaEspecial = caracteristicaEspecial
    }
}

const listaMonitores = []

const monitor1 = new Monitor (201, 'HUAWEI MateView GT 34 pulgadas Con Barra de Sonido', 34, true, 664, 40, 'Alta frecuencia de actualización y Color cinematográfico')
const monitor2 = new Monitor (202, 'Monitor LED de 24" con panel IPS y diseño sin bordes', 24, false, 150, 16, 'Vista totalmente inmersiva, Más potencia para juegos')
const monitor3 = new Monitor (203, 'Monitor LG 24', 24, false, 144, 10, 'tecnología AMD FreeSync brinda  movimiento fluido y sin interrupciones en alta resolución en los juegos')
const monitor4 = new Monitor (204, 'Monitor SAMSUNG 49" Pulgadas OLED CG930 Pl', 49, true, 2018, 14,'Pantalla curva que se adapta completamente al contorno del ojo humano')

function agregarMonitorALista (monitor) {
    listaMonitores.push(monitor)
}

agregarMonitorALista(monitor1)
agregarMonitorALista(monitor2)
agregarMonitorALista(monitor3)
agregarMonitorALista(monitor4)

//console.log(listaMonitores)


class Audifono {
    constructor(id, nombre, precio, stock, esInalambrico, resumen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.esInalambrico = esInalambrico
        this.resumen = resumen
    }
}

const audifono1 = new Audifono(301, 'Audifono Diadema Bose Noise Cancelling Headphones 700 Blueto Color Black', 414, 20, true,'El diseño over-ear genera una comodidad insuperable, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.')
const audifono2 = new Audifono(302, 'Audífonos gamer inalámbricos Logitech G Series G733 blanco con luz rgb LED', 174, 20, true, ' Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida.')
const audifono3 = new Audifono(303, 'Diadema Bt Cancelación Ruido Anc Klip Xtreme Oasis Knh-050bk', 35.79, 40, true, 'Crea tu propio mundo de sonido con estos audífonos que ofrecen Cancelación de Ruido Activa (ANC)')
const audifono4 = new Audifono(304, 'Audífonos Sony Con Funcion De Manos Libres - Mdr-zx310ap Color Negro',20, 40, false, 'Al ser on-ear se apoyan en tus orejas cómodamente y ofrecen una gran calidad de sonido.')
const audifono5 = new Audifono(305, 'Audífonos Alámbricos Diadema Gamer Rgb Controlador Luces #1', 71.69, 25, false, 'Perfecto para toda ocasión y cualquier plataforma, audífono diseñado con tu comodidad en mente')

const listaAudifonos = []

function agregarAudifonoALista (audifono) {
    listaAudifonos.push(audifono)
}

agregarAudifonoALista(audifono1)
agregarAudifonoALista(audifono2)
agregarAudifonoALista(audifono3)
agregarAudifonoALista(audifono4)
agregarAudifonoALista(audifono5)

console.log(listaAudifonos)

