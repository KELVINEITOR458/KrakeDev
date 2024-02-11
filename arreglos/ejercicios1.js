let notas = [];

agregarElementos = function () {
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

recorrerArreglo = function () {
    let notaR;
    for (let indice = 0; indice < notas.length; indice++) {
        notaR = notas[indice];
        console.log(notaR);
    }
}

probarAgregar = function () {
    let notaRecuperada;
    notaRecuperada = recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}

agregarNota = function (nota) {
    notas.push(nota);
    mostrarNotas();

}


generarTabla = function(){
    let contenidoTabla = "";
    let cmpTabla = document.getElementById("divTabla");
    contenidoTabla += "<table><tr><td>UNO</td></tr>" + "<tr><td>DOS</td></tr></table>";
    cmpTabla.innerHTML = contenidoTabla;
}

mostrarNotas = function(){
    let miNota;
    let cmpTabla = document.getElementById("divTabla");
    let contenitoTabla = "<table><tr><th>NOTAS</th></tr>";
    for (let i = 0; i < notas.length; i++){
        miNota = notas[i];
        contenitoTabla += "<tr><td>";
        contenitoTabla += miNota;
        contenitoTabla += "</tr></td>";

    }
    contenitoTabla += "</table>";
    cmpTabla.innerHTML = contenitoTabla;
}


//Reto 41
calcularPromedio = function () {
    let sumarNotas = 0;
    let promedio;

    let notaR;
    for (let indice = 0; indice < notas.length; indice++) {
        notaR = notas[indice];
        sumarNotas = sumarNotas + notaR;
    }

    promedio = sumarNotas / notas.length;
    return promedio;
}

ejecutarPromedio = function () {
    let pro;
    pro = calcularPromedio();

    mostrarTexto("lblPromedio", pro);
}