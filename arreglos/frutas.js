let frutas = ["pera", "manzana", "banana"];

probarBusqueda = function(){
    let frutaIngresada;
    frutaIngresada = recuperarTexto("txtFruta");
    let resultado;
    resultado = buscar(frutaIngresada);

    if(resultado == null){
        alert("NO EXISTE LA FRUTA");
    }else{
        alert(frutaIngresada + "EXISTE");
    }
}

buscar = function(fruta){
    let elemento;
    let frutaEncontrada = null;
    for(let i=0; i < frutas.length; i++){
        elemento = frutas[i];
        if(fruta == elemento){
            frutaEncontrada = fruta;
            break;
        }
    }
    return frutaEncontrada;
}