mostrarTextoEnCaja = function(idComponente, mensaje){
    let componente;
    componente = document.getElementById(idComponente);
    componente.value = mensaje;

}

mostrarImagen = function(idComponente, rutaImagen){
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}

mostrarTexto = function(idComponente,mensaje){
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}

saludarTexto = function(idComponente){
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

recuperarInt = function(idComponente){
    let valorCaja;
    let valorEntero;
    valorCaja = saludarTexto(idComponente);
    valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja;
    let valorFloat;
    valorCaja = saludarTexto(idComponente);
    valorFloat = parseFloat(valorCaja);
    return valorFloat;
}