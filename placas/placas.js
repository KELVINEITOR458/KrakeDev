validarPlaca = function(){
    let placa;
    placa = placa = recuperarTexto("txtPlaca");
    let erroresEstructura = validarEstructura(placa);
    let errorProvincia = obtenerProvincia(placa);
    let pico = obtenerDiaPicoYPlaca(placa);

    if(erroresEstructura == false & errorProvincia == false & pico == false){
        mostrarTexto("lblValidacion", "Placa válida");
    }else{
        mostrarTexto("lblValidacion", "Placa inválida");
        mostrarTexto("provincia", "PROVINCIA INCORRECTA");
        mostrarTexto("picoPlaca", "INGRESE VALOR CORRECTO");
    }

}