jugar = function(){
    let aleatorio;
    aleatorio = lanzarDado();
    cambiarTexto("lblNumero", aleatorio);

    if(aleatorio > 3){
        cambiarTexto("lblMensaje", "Es mayor a 3, GANASTE")
    }else{
        cambiarTexto("lblMensaje", "Es menor a 3, PERDISTE :(")
    }
}

//Crear una función lanzarDado
//No recibe parámetros
 //Retorna un número aleatorio entre 1 y 6
lanzarDado = function(){
    let aleatorio;
    let numeroMultiplicado;
    let numEntero;
    let valorDado;
    aleatorio = Math.random();  //entre 0 y 1
    numeroMultiplicado = aleatorio * 6;
    numEntero = parseInt(numeroMultiplicado);//entre 0 y 5
    valorDado = numEntero + 1;

    return valorDado
    }