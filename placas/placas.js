validarPlaca = function(){
    let placa;
    placa = recuperarTexto("txtPlaca");
    let erroresEstructura = validarEstructura(placa);
    let errorProvincia = obtenerProvincia(placa);
    let pico = obtenerDiaPicoYPlaca(placa);
    let tipo = obtenerTipoVehiculo(placa);

    if(erroresEstructura == false & errorProvincia == false & pico == false & tipo == false){
        mostrarTexto("lblValidacion", "Placa válida");
    }else{
        mostrarTexto("lblValidacion", "Placa inválida");
        mostrarTexto("provincia", "PROVINCIA INCORRECTA");
        mostrarTexto("picoPlaca", "INGRESE VALOR CORRECTO");
        mostrarTexto("vehiculo", "TIPO INCORRECTO");
    }

}

limpiar = function(){
    location.reload();
}