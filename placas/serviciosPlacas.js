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

obtenerProvincia = function(placa){
    let noHayErrores = true;
    let cmpPlaca;
    cmpPlaca = recuperarTexto("txtPlaca");
    placa = cmpPlaca.charCodeAt(0);

    if(placa == 65){
        mostrarTexto("provincia", "Provincia: AZUAY");
        noHayErrores = true;
    }else if(placa == 66){
        mostrarTexto("provincia", "Provincia: BOLÍVAR");
        noHayErrores = true;
    }else if(placa == 85){
        mostrarTexto("provincia", "Provincia: CAÑAR");
        noHayErrores = true;
    }else if(placa == 67){
        mostrarTexto("provincia", "Provincia: CARCHI");
        noHayErrores = true;
    }else if(placa == 88){
        mostrarTexto("provincia", "Provincia: COTOPAXI");
        noHayErrores = true;
    }else if(placa == 72){
        mostrarTexto("provincia", "Provincia: CHIMBORAZO");
        noHayErrores = true;
    }else if(placa == 79){
        mostrarTexto("provincia", "Provincia: EL ORO");
        noHayErrores = true;
    }else if(placa == 69){
        mostrarTexto("provincia", "Provincia: ESMERALDAS");
        noHayErrores = true;
    }else if(placa == 87){
        mostrarTexto("provincia", "Provincia: GALÁPAGOS");
        noHayErrores = true;
    }else if(placa == 71){
        mostrarTexto("provincia", "Provincia: GUAYAS");
        noHayErrores = true;
    }else if(placa == 73){
        mostrarTexto("provincia", "Provincia: IMBABURA");
        noHayErrores = true;
    }else if(placa == 76){
        mostrarTexto("provincia", "Provincia: LOJA");
        noHayErrores = true;
    }else if(placa == 82){
        mostrarTexto("provincia", "Provincia: LOS RÍOS");
        noHayErrores = true;
    }else if(placa == 77){
        mostrarTexto("provincia", "Provincia: MANABÍ");
        noHayErrores = true;
    }else if(placa == 86){
        mostrarTexto("provincia", "Provincia: MORONA SANTIAGO");
        noHayErrores = true;
    }else if(placa == 78){
        mostrarTexto("provincia", "Provincia: NAPO");
        noHayErrores = true;
    }else if(placa == 83){
        mostrarTexto("provincia", "Provincia: PASTAZA");
        noHayErrores = true;
    }else if(placa == 80){
        mostrarTexto("provincia", "Provincia: PICHINCHA");
        noHayErrores = true;
    }else if(placa == 75){
        mostrarTexto("provincia", "Provincia: SUCUMBÍOS");
        noHayErrores = true;
    }else if(placa == 81){
        mostrarTexto("provincia", "Provincia: ORELLANA");
        noHayErrores = true;
    }else if(placa == 84){
        mostrarTexto("provincia", "Provincia: TUNGURAHUA");
        noHayErrores = true;
    }else if(placa == 90){
        mostrarTexto("provincia", "Provincia: ZAMORA CHINCHIPE");
        noHayErrores = true;
    }else if(placa == 89){
        mostrarTexto("provincia", "Provincia: SANTA ELENA");
        noHayErrores = true;
    }else{
        mostrarTexto("provincia", "PROVINCIA INCORRECTA");
        noHayErrores = false;
    }
    return !noHayErrores;
}