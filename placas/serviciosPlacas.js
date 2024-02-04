validarEstructura = function(placa){
    let noHayErrores = true;
    let placaPro;
    placa = recuperarTexto("txtPlaca");
    placaPro = placa.length;
    if(placaPro > 8){
        mostrarTexto("lblErrores", "La placa no puede tener más de 8 caracteres" );
        noHayErrores = false;
    }else{
        mostrarTexto("lblErrores", "" );
    }
    if(placaPro < 7 ){
        mostrarTexto("lblErrores", "La placa debe tener 7 u 8 caracteres" );
        noHayErrores = false;
    }else{
        mostrarTexto("lblErrores", "" );
    }

    if(noHayErrores == true){
        if(esMayuscula1(placa) & esMayuscula2(placa) & esMayuscula3(placa)){
            noHayErrores = true;
        }else {
            noHayErrores = false;
        }

        if(noHayErrores == true){
            if(esGuion(placa)){
                noHayErrores = true;
            }else{
                noHayErrores = false;
            }
        
            if(noHayErrores == true){
                if(esDigito1(placa) & esDigito2(placa) & esDigito3(placa)){
                    noHayErrores = true;
                }else{
                    noHayErrores = false;
                }
                
            }
            if(noHayErrores == true){
                mostrarTexto("lblValidacion", "Placa válida");
                mostrarTexto("lblErrorUl", "");
            }else{
                mostrarTexto("lblValidacion", "Placa inválida");
            }
        }else{
            mostrarTexto("lblValidacion", "Placa inválida");
        }  
    }

    if(placaPro == 8){
        if(esMayuscula1(placa) & esMayuscula2(placa) & esMayuscula3(placa)){
            noHayErrores = true;
        }else {
            noHayErrores = false;
        }

        if(noHayErrores == true){
            if(esGuion(placa)){
                noHayErrores = true;
            }else{
                noHayErrores = false;
            }
        
            if(noHayErrores == true){
                if(esDigito1(placa) & esDigito2(placa) & esDigito3(placa) & esUltDígito(placa)){
                    noHayErrores = true;
                }else{
                    noHayErrores = false;
                }
                
            }
            if(noHayErrores == true){
                noHayErrores = true;
            }else{
                noHayErrores = false;
            }
        }else{
            mostrarTexto("lblValidacion", "Placa inválida");
        }  
    }
    return !noHayErrores;
}