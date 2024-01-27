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

    mostrarTexto("lblPromedio", promedioRedondeado);
}