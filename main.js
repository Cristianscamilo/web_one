/////////////// Simulador de compra y login///////////////

// Accesos como cliente generico
accesoGenerico = { usuario: 'pepe', clave: 123456 }

// Función valor final segun numero de unidades

function precioFinal(valorEquipo, unidades) {
    valorTotal = valorEquipo * unidades;
    return valorTotal
}

//Función que tome valor total y lo divida en numero de cuotas a elección del usuario

function valorDeCuota(numeroCuotas, valorTotal) {
    precioDeCuota = valorTotal / numeroCuotas
    return precioDeCuota
}

//Función validar usuario

function validarUsuario(usuario) {
    usuario = prompt('Bienvenido!, por favor ingresa tu usuario').toLocaleLowerCase()
    if (usuario === accesoGenerico.usuario) {
        return usuario = true
    } else {
        return usuario = false
    }
}
//Función validar contraseña
function validarClave(claveUsuario) {
    claveUsuario = parseInt(prompt('Por favor digita tu contraseña'))
    if (claveUsuario === accesoGenerico.clave) {
        return claveUsuario = true
    } else {
        return claveUsuario = false
    }
}
// constructor de objeto productos para venta en descueto

class productosConDescuentoEspecial {
    constructor(id, nombre, stock, precio) {
        this.id = id;
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio
    }
}
//Productos en descuento
let productoconDescuento1 = new productosConDescuentoEspecial(1, 'One Plus10', 12, 419)
let productoconDescuento2 = new productosConDescuentoEspecial(2, 'Motorola Edg', 12, 229)
let productoconDescuento3 = new productosConDescuentoEspecial(3, 'Doogee', 12, 319)
let productoconDescuento4 = new productosConDescuentoEspecial(4, 'iphone13', 12, 599)
let productoconDescuento5 = new productosConDescuentoEspecial(5, 'iphone14', 12, 699)

//Constructor Celulares para venta al publico
class Celular {
    constructor(id, nombre, precio, stock, almacenamiento, ram, resumen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock
        this.almacenamiento = almacenamiento;
        this.ram = ram
        this.resumen = resumen
    }
}
//Celulares disponibles
const cel1 = new Celular(101, 'iphone 15 6.1', 799, 100, '128 GB', '6 GB', 'Descubre el nuevo iPhone, con diseño de titanio aeroespacial, chip A17 Pro revolucionario y sistema de cámaras potente. ¡Atrévete a la innovación, consigue el tuyo ahora!')
const cel2 = new Celular(102, 'Samsung Galaxy S24 Ultra 6.8', 1581, 50, '512 GB', '12 GB', '¡Descubre el poder del nuevo Galaxy S24 Plus 5G! Llévalo ahora')
const cel3 = new Celular(103, 'Xiaomi Poco X5 PRO 5G', 289, 200, '256 GB', '8 GB', 'ofrece un excelente rendimiento para la gama con una experiencia Android a muy buen nivel')
const cel4 = new Celular(104, 'HUAWEI P60 Pro', 1079, 35, '256 GB', '8 GB', 'Huawei P60 Pro: el nuevo teléfono inteligente de alto rendimiento de Huawei')

//Array con celulares
const listaMoviles = [cel1, cel2, cel3, cel4]
//Constructor Monitores para venta al publico
class Monitor {
    constructor(id, nombre, pulgada, esCurvo, precio, stock, caracteristicaEspecial) {
        this.id = id;
        this.nombre = nombre;
        this.pulgada = pulgada;
        this.esCurvo = esCurvo;
        this.precio = precio;
        this.stock = stock;
        this.caracteristicaEspecial = caracteristicaEspecial
    }
}
//Monitores disponibles
const monitor1 = new Monitor(201, 'HUAWEI MateView GT 34 pulgadas Con Barra de Sonido', 34, true, 664, 40, 'Alta frecuencia de actualización y Color cinematográfico')
const monitor2 = new Monitor(202, 'Monitor LED de 24" con panel IPS y diseño sin bordes', 24, false, 150, 16, 'Vista totalmente inmersiva, Más potencia para juegos')
const monitor3 = new Monitor(203, 'Monitor LG 24', 24, false, 144, 10, 'tecnología AMD FreeSync brinda  movimiento fluido y sin interrupciones en alta resolución en los juegos')
const monitor4 = new Monitor(204, 'Monitor SAMSUNG 49" Pulgadas OLED CG930 Pl', 49, true, 2018, 14, 'Pantalla curva que se adapta completamente al contorno del ojo humano')

//Array con Monitores
const listaMonitores = [monitor1, monitor2, monitor3, monitor4]
//Constructor Audifonos para venta al publico
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
//Audifonos disponibles
const audifono1 = new Audifono(301, 'Audifono Diadema Bose Noise Cancelling Headphones 700 Blueto Color Black', 414, 20, true, 'El diseño over-ear genera una comodidad insuperable, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.')
const audifono2 = new Audifono(302, 'Audífonos gamer inalámbricos Logitech G Series G733 blanco con luz rgb LED', 174, 20, true, ' Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida.')
const audifono3 = new Audifono(303, 'Diadema Bt Cancelación Ruido Anc Klip Xtreme Oasis Knh-050bk', 35.79, 40, true, 'Crea tu propio mundo de sonido con estos audífonos que ofrecen Cancelación de Ruido Activa (ANC)')
const audifono4 = new Audifono(304, 'Audífonos Sony Con Funcion De Manos Libres - Mdr-zx310ap Color Negro', 20, 40, false, 'Al ser on-ear se apoyan en tus orejas cómodamente y ofrecen una gran calidad de sonido.')
const audifono5 = new Audifono(305, 'Audífonos Alámbricos Diadema Gamer Rgb Controlador Luces #1', 71.69, 25, false, 'Perfecto para toda ocasión y cualquier plataforma, audífono diseñado con tu comodidad en mente')

//Array con Audifonos
const listaAudifonos = [audifono1, audifono2, audifono3, audifono4, audifono5]
//Lista de los productos del negocio a la venta 
let listadoProductosStore = listaMoviles.concat(listaMonitores, listaAudifonos)

//Funcion para busqueda exacta de productos por id
function buscarproductoPorId(id) {
    return listadoProductosStore.find(producto => producto.id === id)
}
//Función proceso de selección y compra de producto por categoria o linea
function productosEnCategoria(categoriaProducto) {
    categoriaProducto = parseInt(prompt(`Estas son las categorias o lineas de producto que tenemos
    1 Celulares
    2 Monitores
    3 Audifonos`))
    if (categoriaProducto >= 1 && categoriaProducto <= 3) {
        switch (categoriaProducto) {
            case 1:
                idDePRoducto = parseInt(prompt(`
                id         Nombre de producto
                ${listaMoviles[0].id}      ${listaMoviles[0].nombre}                
                ${listaMoviles[1].id}      ${listaMoviles[1].nombre}                
                ${listaMoviles[2].id}      ${listaMoviles[2].nombre}                
                ${listaMoviles[3].id}      ${listaMoviles[3].nombre}
                `
                ))

                if (idDePRoducto >= 101 && idDePRoducto <= 104) {
                    let aceptarCompra = confirm(
                        `Seleccionaste el ${buscarproductoPorId(idDePRoducto).nombre}, tenemos en stock ${buscarproductoPorId(idDePRoducto).stock} unidades, su valor es de $${buscarproductoPorId(idDePRoducto).precio} usd, cuenta con una memoria ram de ${buscarproductoPorId(idDePRoducto).ram} y un almacenamiento de ${buscarproductoPorId(idDePRoducto).almacenamiento}.
                        
                        ${buscarproductoPorId(idDePRoducto).resumen}

                        ¿Deseas adquirirlo ahora?`
                    )
                    if (aceptarCompra) {
                        cantidad = parseInt(prompt(
                            `Indicanos por favor cuantas cantidades deseas llevar de las ${buscarproductoPorId(idDePRoducto).stock} unidades en stock`))
                        if (cantidad <= buscarproductoPorId(idDePRoducto).stock) {
                            precioFinal(buscarproductoPorId(idDePRoducto).precio, cantidad)
                            procesoDePago = confirm(`El valor de tu compra es de $${valorTotal} USD, ¿Deseas continuar con la compra?`)
                            if (procesoDePago) {
                                numeroCuotas = parseFloat(prompt('Puedes pagar tu producto de 1 a 24 cuotas, por favor dinos el periodo de pago o cuota que te llama la atención'))
                                if (numeroCuotas >= 1 && numeroCuotas <= 24) {
                                    valorDeCuota(numeroCuotas, valorTotal)
                                    CulminacionPago = confirm(`El valor a pagar sera $${precioDeCuota.toFixed(2)} usd en este periodo, para culminar el proceso solo debes "Aceptar".`)
                                    if (CulminacionPago) {
                                        alert("Gracias por tu compra, vuelve pronto!")
                                    } else {
                                        alert("Has cancelado el pago, te invitamos a observar otro de los productos disponibles")
                                    }
                                } else {
                                    alert("Lamentablemente el valor agregado es inexistente, por seguridad el proceso finaliza.")
                                }
                            } else {
                                alert('Lamentamos que no fuera lo que buscabas, seguiremos aqui para cuando regreses, fue un gusto contar con tu visita!')
                            }
                        } else {
                            alert("Lamentablemente el valor agregado es inexistente, te invitamos a acceder de nuevo")
                        }
                    } else {
                        alert('Lamentamos que no fuera lo que buscabas, seguiremos aqui para cuando regreses, fue un gusto contar con tu visita!')
                    }
                } else {
                    alert('Oh perdona, con gusto estaremos aqui para apoyarte bajo el stock actual')
                }
                break;
            case 2:
                idDePRoducto = parseInt(prompt(`
    id         Nombre de producto
    ${listaMonitores[0].id}      ${listaMonitores[0].nombre}                
    ${listaMonitores[1].id}      ${listaMonitores[1].nombre}                
    ${listaMonitores[2].id}      ${listaMonitores[2].nombre}                
    ${listaMonitores[3].id}      ${listaMonitores[3].nombre}
                `
                ))

                if (idDePRoducto >= 201 && idDePRoducto <= 204) {
                    let aceptarCompra = confirm(
                        `Seleccionaste el ${buscarproductoPorId(idDePRoducto).nombre}, tenemos en stock ${buscarproductoPorId(idDePRoducto).stock} unidades, su valor es de $${buscarproductoPorId(idDePRoducto).precio} usd. Curvatura: ${buscarproductoPorId(idDePRoducto).esCurvo}. Tiene un tamaño de ${buscarproductoPorId(idDePRoducto).pulgada} pulgadas.
                        
${buscarproductoPorId(idDePRoducto).caracteristicaEspecial}

                        ¿Deseas adquirirlo ahora?`
                    )
                    if (aceptarCompra) {
                        cantidad = parseInt(prompt(
                            `Indicanos por favor cuantas cantidades deseas llevar de las ${buscarproductoPorId(idDePRoducto).stock} unidades en stock`))
                        if (cantidad <= buscarproductoPorId(idDePRoducto).stock) {
                            precioFinal(buscarproductoPorId(idDePRoducto).precio, cantidad)
                            procesoDePago = confirm(`El valor de tu compra es de $${valorTotal} USD, ¿Deseas continuar con la compra?`)
                            if (procesoDePago) {
                                numeroCuotas = parseFloat(prompt('Puedes pagar tu producto de 1 a 24 cuotas, por favor dinos el periodo de pago o cuota que te llama la atención'))
                                if (numeroCuotas >= 1 && numeroCuotas <= 24) {
                                    valorDeCuota(numeroCuotas, valorTotal)
                                    CulminacionPago = confirm(`El valor a pagar sera $${precioDeCuota.toFixed(2)} usd en este periodo, para culminar el proceso solo debes "Aceptar".`)
                                    if (CulminacionPago) {
                                        alert("Gracias por tu compra, vuelve pronto!")
                                    } else {
                                        alert("Has cancelado el pago, te invitamos a observar otro de los productos disponibles")
                                    }
                                } else {
                                    alert("Lamentablemente el valor agregado es inexistente, por seguridad el proceso finaliza.")
                                }
                            } else {
                                alert('Lamentamos que no fuera lo que buscabas, seguiremos aqui para cuando regreses, fue un gusto contar con tu visita!')
                            }
                        } else {
                            alert("Lamentablemente el valor agregado es inexistente, te invitamos a acceder de nuevo")
                        }
                    } else {
                        alert('Lamentamos que no fuera lo que buscabas, seguiremos aqui para cuando regreses, fue un gusto contar con tu visita!')
                    }
                } else {
                    alert('Oh perdona, con gusto estaremos aqui para apoyarte bajo el stock actual')
                }

                break;
            case 3:
                idDePRoducto = parseInt(prompt(`
    id         Nombre de producto
    ${listaAudifonos[0].id}      ${listaAudifonos[0].nombre}                
    ${listaAudifonos[1].id}      ${listaAudifonos[1].nombre}                
    ${listaAudifonos[2].id}      ${listaAudifonos[2].nombre}                
    ${listaAudifonos[3].id}      ${listaAudifonos[3].nombre}
    ${listaAudifonos[4].id}      ${listaAudifonos[4].nombre}
                `
                ))

                if (idDePRoducto >= 301 && idDePRoducto <= 305) {
                    let aceptarCompra = confirm(
                        `Seleccionaste ${buscarproductoPorId(idDePRoducto).nombre}, tenemos en stock ${buscarproductoPorId(idDePRoducto).stock} unidades, su valor es de $${buscarproductoPorId(idDePRoducto).precio} usd. Caracteristica de inalámbrico: ${buscarproductoPorId(idDePRoducto).esInalambrico}.
                        
    ${buscarproductoPorId(idDePRoducto).resumen}

                        ¿Deseas adquirirlo ahora?`
                    )
                    if (aceptarCompra) {
                        cantidad = parseInt(prompt(
                            `Indicanos por favor cuantas cantidades deseas llevar de las ${buscarproductoPorId(idDePRoducto).stock} unidades en stock`))
                        if (cantidad <= buscarproductoPorId(idDePRoducto).stock) {
                            precioFinal(buscarproductoPorId(idDePRoducto).precio, cantidad)
                            procesoDePago = confirm(`El valor de tu compra es de $${valorTotal} USD, ¿Deseas continuar con la compra?`)
                            if (procesoDePago) {
                                numeroCuotas = parseFloat(prompt('Puedes pagar tu producto de 1 a 24 cuotas, por favor dinos el periodo de pago o cuota que te llama la atención'))
                                if (numeroCuotas >= 1 && numeroCuotas <= 24) {
                                    valorDeCuota(numeroCuotas, valorTotal)
                                    CulminacionPago = confirm(`El valor a pagar sera $${precioDeCuota.toFixed(2)} usd en este periodo, para culminar el proceso solo debes "Aceptar".`)
                                    if (CulminacionPago) {
                                        alert("Gracias por tu compra, vuelve pronto!")
                                    } else {
                                        alert("Has cancelado el pago, te invitamos a observar otro de los productos disponibles")
                                    }
                                } else {
                                    alert("Lamentablemente el valor agregado es inexistente, por seguridad el proceso finaliza.")
                                }
                            } else {
                                alert('Lamentamos que no fuera lo que buscabas, seguiremos aqui para cuando regreses, fue un gusto contar con tu visita!')
                            }
                        } else {
                            alert("Lamentablemente el valor agregado es inexistente, te invitamos a acceder de nuevo")
                        }
                    } else {
                        alert('Lamentamos que no fuera lo que buscabas, seguiremos aqui para cuando regreses, fue un gusto contar con tu visita!')
                    }
                } else {
                    alert('Oh perdona, con gusto estaremos aqui para apoyarte bajo el stock actual')
                }
                break;
            default:
                alert('Seguimos en cosntrucción, pero ahora mismo solo tenemos opciones del 1 al 3 :)')
                break;
        }
    } else {
        alert('Oh perdona, de momento solo contamos con estas opciones...pero seguimos creciendo!')
    }
}
//Función proceso de selección y compra de producto en opciones con descuento opción 2

function seleccionProductoConDesc(equipo, cantidad) {
    equipo = parseInt(prompt(`Te dejaremos las mas recientes opciones de compra en oferta, para que accedas a tu nuevo movil, por favor selecciona aquella opción de tu interes con el numero de referencia asignado:
                
  #Ref    EQUIPO   COSTO $US
      
  ${productoconDescuento1.id}   ${productoconDescuento1.nombre}..............${productoconDescuento1.precio}  
  ${productoconDescuento2.id}   ${productoconDescuento2.nombre}..............${productoconDescuento2.precio}  
  ${productoconDescuento3.id}   ${productoconDescuento3.nombre}..............${productoconDescuento3.precio}  
  ${productoconDescuento4.id}   ${productoconDescuento4.nombre}..............${productoconDescuento4.precio}  
  ${productoconDescuento5.id}   ${productoconDescuento5.nombre}..............${productoconDescuento5.precio}  
        `))
    if (equipo > 0 && equipo < 6) {
        cantidad = parseInt(prompt(`Por favor, indicanos cuantas unidades deseas llevar. El maximo de productos en oferta por compra sera de 12. (Solo ingresa un número en este rango)`))
        if (cantidad >= 1 && cantidad <= 12) {
            switch (equipo) {
                case 1:
                    precioFinal(productoconDescuento1.precio, cantidad)
                    procesoDePago = confirm(`El valor de tu compra es de $${valorTotal} USD, ¿Deseas continuar con la compra?`)
                    if (procesoDePago) {
                        numeroCuotas = parseFloat(prompt('Puedes pagar tu producto de 1 a 24 cuotas, por favor dinos el periodo de pago o cuota que te llama la atención'))
                        if (numeroCuotas >= 1 && numeroCuotas <= 24) {
                            valorDeCuota(numeroCuotas, valorTotal)
                            CulminacionPago = confirm(`El valor a pagar sera $${precioDeCuota.toFixed(2)} usd en este periodo, para culminar el proceso solo debes "Aceptar".`)
                            if (CulminacionPago) {
                                alert("Gracias por tu compra, vuelve pronto!")
                            } else {
                                alert("Has cancelado el pago, te invitamos a observar otro de los productos disponibles")
                            }
                        } else {
                            alert("Lamentablemente el valor agregado es inexistente, por seguridad el proceso finaliza.")
                        }
                    } else {
                        alert('Lamentamos que no fuera lo que buscabas, seguiremos aqui para cuando regreses, fue un gusto contar con tu visita!')
                    }
                    break;
                case 2:
                    precioFinal(productoconDescuento2.precio, cantidad)
                    procesoDePago = confirm(`El valor de tu compra es de $${valorTotal} USD, ¿Deseas continuar con la compra?`)
                    if (procesoDePago) {
                        numeroCuotas = parseFloat(prompt('Puedes pagar tu producto de 1 a 24 cuotas, por favor dinos el periodo de pago o cuota que te llama la atención'))
                        if (numeroCuotas >= 1 && numeroCuotas <= 24) {
                            valorDeCuota(numeroCuotas, valorTotal)
                            CulminacionPago = confirm(`El valor a pagar sera $${precioDeCuota.toFixed(2)} usd en este periodo, para culminar el proceso solo debes "Aceptar".`)
                            if (CulminacionPago) {
                                alert("Gracias por tu compra, vuelve pronto!")
                            } else {
                                alert("Has cancelado el pago, te invitamos a observar otro de los productos disponibles")
                            }
                        } else {
                            alert("Lamentablemente el valor agregado es inexistente, por seguridad el proceso finaliza.")
                        }
                    } else {
                        alert('Lamentamos que no fuera lo que buscabas, seguiremos aqui para cuando regreses, fue un gusto contar con tu visita!')
                    }
                    break;
                case 3:
                    precioFinal(productoconDescuento3.precio, cantidad)
                    procesoDePago = confirm(`El valor de tu compra es de $${valorTotal} USD, ¿Deseas continuar con la compra?`)
                    if (procesoDePago) {
                        numeroCuotas = parseFloat(prompt('Puedes pagar tu producto de 1 a 24 cuotas, por favor dinos el periodo de pago o cuota que te llama la atención'))
                        if (numeroCuotas >= 1 && numeroCuotas <= 24) {
                            valorDeCuota(numeroCuotas, valorTotal)
                            CulminacionPago = confirm(`El valor a pagar sera $${precioDeCuota.toFixed(2)} usd en este periodo, para culminar el proceso solo debes "Aceptar".`)
                            if (CulminacionPago) {
                                alert("Gracias por tu compra, vuelve pronto!")
                            } else {
                                alert("Has cancelado el pago, te invitamos a observar otro de los productos disponibles")
                            }
                        } else {
                            alert("Lamentablemente el valor agregado es inexistente, por seguridad el proceso finaliza.")
                        }
                    } else {
                        alert('Lamentamos que no fuera lo que buscabas, seguiremos aqui para cuando regreses, fue un gusto contar con tu visita!')
                    }
                    break;
                case 4:
                    precioFinal(productoconDescuento4.precio, cantidad)
                    procesoDePago = confirm(`El valor de tu compra es de $${valorTotal} USD, ¿Deseas continuar con la compra?`)
                    if (procesoDePago) {
                        numeroCuotas = parseFloat(prompt('Puedes pagar tu producto de 1 a 24 cuotas, por favor dinos el periodo de pago o cuota que te llama la atención'))
                        if (numeroCuotas >= 1 && numeroCuotas <= 24) {
                            valorDeCuota(numeroCuotas, valorTotal)
                            CulminacionPago = confirm(`El valor a pagar sera $${precioDeCuota.toFixed(2)} usd en este periodo, para culminar el proceso solo debes "Aceptar".`)
                            if (CulminacionPago) {
                                alert("Gracias por tu compra, vuelve pronto!")
                            } else {
                                alert("Has cancelado el pago, te invitamos a observar otro de los productos disponibles")
                            }
                        } else {
                            alert("Lamentablemente el valor agregado es inexistente, por seguridad el proceso finaliza.")
                        }
                    } else {
                        alert('Lamentamos que no fuera lo que buscabas, seguiremos aqui para cuando regreses, fue un gusto contar con tu visita!')
                    }
                    break;
                case 5:
                    precioFinal(productoconDescuento5.precio, cantidad)
                    procesoDePago = confirm(`El valor de tu compra es de $${valorTotal} USD, ¿Deseas continuar con la compra?`)
                    if (procesoDePago) {
                        numeroCuotas = parseFloat(prompt('Puedes pagar tu producto de 1 a 24 cuotas, por favor dinos el periodo de pago o cuota que te llama la atención'))
                        if (numeroCuotas >= 1 && numeroCuotas <= 24) {
                            valorDeCuota(numeroCuotas, valorTotal)
                            CulminacionPago = confirm(`El valor a pagar sera $${precioDeCuota.toFixed(2)} usd en este periodo, para culminar el proceso solo debes "Aceptar".`)
                            if (CulminacionPago) {
                                alert("Gracias por tu compra, vuelve pronto!")
                            } else {
                                alert("Has cancelado el pago, te invitamos a observar otro de los productos disponibles")
                            }
                        } else {
                            alert("Lamentablemente el valor agregado es inexistente, por seguridad el proceso finaliza.")
                        }
                    } else {
                        alert('Lamentamos que no fuera lo que buscabas, seguiremos aqui para cuando regreses, fue un gusto contar con tu visita!')
                    }
                    break;
            }
        } else {
            alert('Digitaste un valor irreal o se cancelo el proceso, te invitamos a iniciar de nuevo')
            seleccionProductoConDesc()
        }
    } else {
        alert('Lo lamento ese no es un valor valido')
    }
}
//Función elegir dos opciones de compra 1. Por categoria o linea de producto 2. Productos en descuento especial 

function mecanicaDeCompraPorUsuario(opcion) {
    opcion = parseInt(prompt(`Te facilito dos mecanicas para realizar tus compras, por favor digita el numero de la que te llama la atención:
Opción   Descripción 
    1     Mira nuestras categorías o líneas y encuentra rápidamente lo que deseas.
    2     Aquí verás las mejores ofertas del mes, ¡hasta agotar existencias!`))
    if (opcion >= 1 && opcion <= 2) {
        switch (opcion) {
            case 1:
                productosEnCategoria()
                break;
            case 2:
                seleccionProductoConDesc()
                break;
            default:
                alert('Lo lamento, de momento solo tenemos estas opciones...pero seguiremos trabajando para mejorar!')
                break;
        }
    } else {
        alert('Con gusto estaremos aqui a tu regreso')
    }
}
//Función para validar acceso y proceder con venta
let intento = 1
function IngresoCompra(usuario, claveUsuario) {
    for (let i = 0; i < 3; i++) {
        let nickname = validarUsuario(usuario)
        let password = validarClave(claveUsuario)
        if (nickname && password) {
            mecanicaDeCompraPorUsuario()
        } else {
            alert(`Lo Lamento, usuario y/o clave incorrecta, intento (${intento++})/3`)
        }
    }
}
//Puesta en marcha
IngresoCompra()

//busqueda de productos por precio inferior a x dolares...para uso futuro
/*
function filtro (valor) { 
    return listadoProductosStore.filter(producto => producto.precio <= valor)
}

console.table(filtro(50))
*/