accesoGenerico  = { usuario: 'cliente1', clave: 123456}


// Simulador de compra y login

//Productos


let producto1 = 419
let producto2 = 229
let producto3 = 319
let producto4 = 699
let producto5 = 799


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
    usuario = prompt('Bienvenido!, por favor ingresa tu usuario')
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

//Función proceso de selección y compra de producto

function seleccionProductoConDesc(equipo, cantidad) {
    alert(`Bienvenido a tu Store!`)
    equipo = parseInt(prompt(`Te dejaremos las mas recientes opciones de compra en oferta, para que accedas a tu nuevo movil, por favor selecciona aquella opción de tu interes con el numero de referencia asignado:
                
#Ref  EQUIPO             COSTO $US
      
  1   One Plus10............... 419
  2   Motorola Edg......... 229
  3   Doogee.................... 319
  4   iphone13................. 699
  5   iphone14................. 799 
        `))
    if (equipo > 0 && equipo < 6) {
        cantidad = parseInt(prompt(`Por favor, indicanos cuantas unidades deseas llevar. El maximo de productos en oferta por compra sera de 12. (Solo ingresa un número en este rango)`))
        if (cantidad >= 1 && cantidad <= 12) {
            switch (equipo) {
                case 1:
                    precioFinal(producto1, cantidad)
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
                    precioFinal(producto2, cantidad)
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
                    precioFinal(producto3, cantidad)
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
                    precioFinal(producto4, cantidad)
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
                    precioFinal(producto5, cantidad)
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
        seleccionProductoConDesc()
    }
}

//Función para validar acceso y proceder con venta

let intento = 1

function IngresoCompra(usuario, claveUsuario) {
    for (let i = 0; i < 3; i++) {
        let nickname = validarUsuario(usuario)
        let password = validarClave(claveUsuario)
        if (nickname && password) {
            seleccionProductoConDesc()
        } else {
            alert(`Lo Lamento, usuario y/o clave incorrecta, intento (${intento++})/3`) 
        }
    }
}





IngresoCompra()


//metodos objeto math
//Objetos con array o "Colección de objetos" objetos literales
//array objetos busqueda, filtrado sobre array
