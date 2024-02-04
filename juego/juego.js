let puntosUsuario = 0;
let puntosComputador = 0;


jugar = function(){
    let generar1;
    let generar2;
    generar1 = generarElemento();
    generar2 = generarElemento2();

    generarRuta1(generar1);
    generarRuta2(generar2);
    
    determinarGanador(generar1, generar2);

    if(generar1 == generar2){
        mostrarTexto("ganador", "EMPATE");
    }else if(generar1 == 1 && generar2 == 3){
        mostrarTexto("ganador", "GANASTE");
        modificarPuntosUsuario();
    }else if(generar1 == 1 && generar2 == 2){
        mostrarTexto("ganador", "PERDISTE");
        modificarPuntosCompu();
    }else if(generar1 == 2 && generar2 == 1){
        mostrarTexto("ganador", "GANASTE");
        modificarPuntosUsuario();
    }else if(generar1 == 2 && generar2 == 3){
        mostrarTexto("ganador", "PERDISTE");
        modificarPuntosCompu();
    }else if(generar1 == 3 && generar2 == 2){
        mostrarTexto("ganador", "GANASTE");
        modificarPuntosUsuario();
    }else if(generar1 == 3 && generar2 == 1){
        mostrarTexto("ganador", "PERDISTE");
        modificarPuntosCompu();
    }

}



modificarPuntosUsuario = function(){
    puntosUsuario = puntosUsuario + 1;
    mostrarTexto("lblPuntosUsuario", "PUNTOS: " + puntosUsuario);
    if(puntosUsuario == 5){
        mostrarTexto("ganador", "HAS GANADO EL JUEGO");
    }
}

modificarPuntosCompu = function(){
    puntosComputador = puntosComputador + 1;
    mostrarTexto("lblPuntosCompu", "PUNTOS: " + puntosComputador);

    if(puntosComputador == 5){
        mostrarTexto("ganador", "COMPUTADOR TE HA VENCIDO");
    }
}

limpiar = function(){
    location.reload();
}