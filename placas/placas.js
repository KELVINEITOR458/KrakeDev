validarPlaca = function(){
    let placa;
    placa = placa = recuperarTexto("txtPlaca");
    let erroresEstructura = validarEstructura(placa);
    let errorProvincia = obtenerProvincia(placa);
    if(erroresEstructura == false & errorProvincia == false){
        mostrarTexto("lblValidacion", "Placa válida");
    }else{
        mostrarTexto("lblValidacion", "Placa inválida");
        mostrarTexto("provincia", "PROVINCIA INCORRECTA");
    }

}