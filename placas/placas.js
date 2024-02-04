validarPlaca = function(){
    let placa;
    placa = placa = recuperarTexto("txtPlaca");
    let erroresEstructura = validarEstructura(placa);
    if(erroresEstructura == false){
        mostrarTexto("lblValidacion", "Placa válida")
    }else{
        mostrarTexto("lblValidacion", "Placa inválida")
    }

}