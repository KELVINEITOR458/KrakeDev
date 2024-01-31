let puntos;
puntos = 0;
let lanzamientos;
lanzamientos = 5;



jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos();
    
}

modificarPuntos = function(numero){
    puntos = puntos + numero;
    cambiarTexto("lblPuntos", puntos);
    //si el jugador obtiene mas de 20 puntos, mostrar un mensaje "GANASTE"
    if(puntos > 19){
        cambiarTexto("lblResultado","GANASTE! " + "Resultado: " + puntos);
    } 
    
}

//no recibe parámetros
//resta 1 a la variable lanzamientos
//guarda resultado en la misma variable
//muestra en pantalla
modificarLanzamientos = function(){
    //si lanzamientos llega a 0, mostrar en pantalla el mensaje "GAME OVER"
    lanzamientos = lanzamientos - 1;
    cambiarTexto("lblLanzamientos", lanzamientos);
    if (lanzamientos == 0 & puntos < 20){
        cambiarTexto("lblResultado", "GAME OVER! " + "Resultado: " + puntos);
    }

}

limpiar = function(){
    //colocar puntaje en 0 y lanzamientos en 5
    //en las variables y en pantalla
    //quitar la imagen
    location.reload();
    //use este codigo ya que se me hizo mas intuitivo
}

//función mostrarCara recibe el número que quiere mostrar, y muestra la imagen correspondiente al número que recibe, no retorna nada
mostrarCara = function(numero){
    if (numero == 1){ //con == se comprara, mientras que con = se asigna
        cambiarImagen("imgDado", "dados1.png");
    }else if(numero == 2){
        cambiarImagen("imgDado", "dados2.png");
    }else if(numero == 3){
        cambiarImagen("imgDado", "dados3.png");
    }else if(numero == 4){
        cambiarImagen("imgDado", "dados4.png");
    }else if(numero == 5){
        cambiarImagen("imgDado", "dados5.png");
    }else if(numero == 6){
        cambiarImagen("imgDado", "dados6.png");
    }
}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}