calcularPromedioNotas = function(){
    let nota1;
    let nota2;
    let nota3;
    nota1 = recuperarFloat("lbl1");
    nota2 = recuperarFloat("lbl2");
    nota3 = recuperarFloat("lbl3");

    let promedio;
    let promedioRedondeado;
    promedio = calcularPromedio(nota1, nota2, nota3);
    promedioRedondeado = promedio.toFixed(2);

    mostrarTexto("lblPromedio", "Su promedio es: " + promedioRedondeado);

    if(promedioRedondeado < 5 && promedioRedondeado > 0){
        cambiarGif("imgResultado", "imagenes/mal.gif");
        mostrarTexto("frase", "REPROBADO");
    } else if(promedioRedondeado >= 5 && promedioRedondeado <= 8) {
        cambiarGif("imgResultado", "imagenes/normal.gif");
        mostrarTexto("frase", "BUEN TRABAJO");
    } else if(promedioRedondeado > 8 && promedioRedondeado <= 10){
        cambiarGif("imgResultado", "imagenes/bien.gif");
        mostrarTexto("frase", "EXCELENTE");
    }else {
        cambiarGif("imgResultado", "imagenes/incorrecto.gif");
        mostrarTexto("frase", "DATOS INCORRECTOS");
        mostrarTexto("lblPromedio", " ")
    }
}