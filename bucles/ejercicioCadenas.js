ejecutarPrueba1 = function(){
    let mensaje;
    mensaje = recuperarTexto("txtCadena");

    recorrerCadena(mensaje);
}

ejecutarPrueba2 = function(){
    let mensaje;
    mensaje = recuperarTexto("txtCadena");

    invertirCadena(mensaje);
}


recorrerCadena = function(cadena){
    //0123456
    //Juanito
    let caracter;


    for(let posicion = 0; posicion < cadena.length; posicion++){
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posición: " + posicion);
    }

    for(let posicion = 0; posicion <= cadena.length-1; posicion++){
        caracter = cadena.charAt(posicion);
        console.log("CARACTER " + caracter + " posición: " + posicion);
    }
}

invertirCadena = function(cadena){
    let caracter = "";

    for(let posicion = 0; posicion < cadena.length; posicion++){
        caracter = cadena.charAt(posicion) + caracter;
        mostrarTexto("resultado", caracter);
        
    }
}