obtenerAleatorio = function(){
    let aleatorio;
    let numeroMultiplicado;
    let numEntero;
    let valorDado;
    aleatorio = Math.random();  
    numeroMultiplicado = aleatorio * 3;
    numEntero = parseInt(numeroMultiplicado);
    valorDado = numEntero + 1;

    return valorDado
}

generarElemento = function(){
    let aleatorio;
    aleatorio = obtenerAleatorio();

    if(aleatorio == 1){
        mostrarTexto("objeto", "Piedra");
        return 1;
    }else if(aleatorio == 2){
        mostrarTexto("objeto", "Papel");
        return 2;
    }else if(aleatorio == 3){
        mostrarTexto("objeto", "Tijeras");
        return 3;
    }

}

generarElemento2 = function(){
    let aleatorio2;
    aleatorio2 = obtenerAleatorio();

    if(aleatorio2 == 1){
        mostrarTexto("objeto2", "Piedra");
        return 1;
    }else if(aleatorio2 == 2){
        mostrarTexto("objeto2", "Papel");
        return 2;
    }else if(aleatorio2 == 3){
        mostrarTexto("objeto2", "Tijeras");
        return 3;
    }
}


determinarGanador = function(eleccionJugador1, eleccionJugador2){
    if(eleccionJugador1 == eleccionJugador2){
        return 0;
    }else if(eleccionJugador1 > eleccionJugador2){
        return 1;
    }else if(eleccionJugador1 < eleccionJugador2){
        return 2;
    }
}

generarRuta1 = function(nombre){
    if(nombre == 1){
        mostrarImagen("img1", "./imagenes/piedra.png");
    }else if(nombre == 2){
        mostrarImagen("img1", "./imagenes/papel.png");
    }else if(nombre == 3){
        mostrarImagen("img1", "./imagenes/tijera.webp");
    }
}

generarRuta2 = function(nombre){
    if(nombre == 1){
        mostrarImagen("img2", "./imagenes/piedra.png");
    }else if(nombre == 2){
        mostrarImagen("img2", "./imagenes/papel.png");
    }else if(nombre == 3){
        mostrarImagen("img2", "./imagenes/tijera.webp");
    }
}


