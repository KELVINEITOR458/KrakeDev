esMayuscula1 = function(caracter1){
    let cmpCaracter1;
    let charCaracter1;
    cmpCaracter1 = recuperarTexto("txtPlaca");
    charCaracter1 = cmpCaracter1.charCodeAt(0);
    caracter1 = charCaracter1;

    if(caracter1 >= 65 && caracter1 <= 90){
        mostrarTexto("lblErrorMayus1", "");
        return true;
    }else {
        mostrarTexto("lblErrorMayus1", "La letra 1 debe ser mayúscula");
        return false;
    }
}

esMayuscula2 = function(caracter2){
    let cmpCaracter2;
    let charCaracter2;
    cmpCaracter2 = recuperarTexto("txtPlaca");
    charCaracter2 = cmpCaracter2.charCodeAt(1);
    caracter2 = charCaracter2;

    if(caracter2 >= 65 && caracter2 <= 90){
        mostrarTexto("lblErrorMayus2", "");
        return true;
    }else {
        mostrarTexto("lblErrorMayus2", "La letra 2 debe ser mayúscula");
        return false;
    }
}

esMayuscula3 = function(caracter3){
    let cmpCaracter3;
    let charCaracter3;
    cmpCaracter3 = recuperarTexto("txtPlaca");
    charCaracter3 = cmpCaracter3.charCodeAt(2);
    caracter3 = charCaracter3;

    if(caracter3 >= 65 && caracter3 <= 90){
        mostrarTexto("lblErrorMayus3", "");
        return true;
    }else {
        mostrarTexto("lblErrorMayus3", "La letra 3 debe ser mayúscula");
        return false;
    }
}




esDigito1 = function(caracter1){
    let cmpCaracter1
    cmpCaracter1 = recuperarTexto("txtPlaca");
    caracter1 = cmpCaracter1.charCodeAt(4);

    if(caracter1 >= 48 && caracter1 <= 57){
        mostrarTexto("lblErrorDig1", "");
        return true;
    }else {
        mostrarTexto("lblErrorDig1", "El carácter 5 debe ser un número");
        return false;
    }
}

esDigito2 = function(caracter2){
    let cmpCaracter2
    cmpCaracter2 = recuperarTexto("txtPlaca");
    caracter2 = cmpCaracter2.charCodeAt(5);

    if(caracter2 >= 48 && caracter2 <= 57){
        mostrarTexto("lblErrorDig2", "");
        return true;
    }else {
        mostrarTexto("lblErrorDig2", "El carácter 6 debe ser un número");
        return false;
    }
}

esDigito3 = function(caracter3){
    let cmpCaracter3
    cmpCaracter3 = recuperarTexto("txtPlaca");
    caracter3 = cmpCaracter3.charCodeAt(6);

    if(caracter3 >= 48 && caracter3 <= 57){
        mostrarTexto("lblErrorDig3", "");
        return true;
    }else {
        mostrarTexto("lblErrorDig3", "El carácter 7 debe ser un número");
        return false;
    }
}

esUltDígito = function(caracter){
    let letra;
    let ultimaposicion;
    letra = caracter.length -1;
    ultimaposicion = caracter.charAt(letra);

    if(ultimaposicion >= 0 && ultimaposicion <= 9){
        mostrarTexto("lblErrorUl", "");
        return true;
    }else{
        mostrarTexto("lblErrorUl", "El último caracter debe ser un número");
        return false;
    }
}

esGuion = function(caracter){
    let cmpCaracter
    cmpCaracter = recuperarTexto("txtPlaca");
    caracter = cmpCaracter.charCodeAt(3);

    if(caracter == 45){
        mostrarTexto("lblErrorGuion", "");
        return true;
    }else {
        mostrarTexto("lblErrorGuion", "El carácter 4 debe ser un guión");
        return false;
    }
}