let notas = [];

agregarElementos = function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

recorrerArreglo = function(){
    let notaR;
    for(let indice = 0; indice < notas.length; indice++){
        notaR = notas[indice];
        console.log(notaR);
    }
}

probarAgregar = function(){
    let notaRecuperada;
    notaRecuperada = recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}

agregarNota = function(nota){
    notas.push(nota);

}



//Reto 41
calcularPromedio = function(){
    let sumarNotas = 0;
    let promedio;

    let notaR;
    for(let indice = 0; indice < notas.length; indice++){
        notaR = notas[indice];
        sumarNotas = sumarNotas + notaR;
    }

    promedio = sumarNotas / notas.length;
    return promedio;
}

ejecutarPromedio = function(){
    let pro;
    pro = calcularPromedio();

    mostrarTexto("lblPromedio", pro);
}