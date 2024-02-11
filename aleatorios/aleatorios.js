let aleatorios = [];
numeroRandom = function () {
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorNumero;
    aleatorio = Math.random();
    aleatorioMultiplicado = aleatorio * 100;
    aleatorioEntero = parseInt(aleatorioMultiplicado);
    valorNumero = aleatorioEntero + 1;
    return valorNumero;
}

generarAleatorios = function(){
    let noHayErrores = true;
    let numRecuperado;
    numRecuperado = recuperarInt("txtNumero");
    if(numRecuperado >= 5 && numRecuperado <= 20){
        noHayErrores = true;
    }else{
        alert("El numero debe ser entre 5 y 20");
        noHayErrores = false;
    }

    if(noHayErrores == true){
        for(let i=0; i < numRecuperado; i++){
            let numArreglo;
            console.log(i);
            numArreglo = numeroRandom();
            aleatorios.push(numArreglo);
        }
        mostrarResultados();
    }
}

mostrarResultados = function(){
    let miNum;
    let cmpTabla = document.getElementById("divDatos");
    let contenitoTabla = "<table><tr><th>Numeros aleatorios</th></tr>";
    for (let i = 0; i < aleatorios.length; i++){
        miNum= aleatorios[i];
        contenitoTabla += "<tr><td>";
        contenitoTabla += miNum;
        contenitoTabla += "</tr></td>";

    }
    contenitoTabla += "</table>";
    cmpTabla.innerHTML = contenitoTabla;
}