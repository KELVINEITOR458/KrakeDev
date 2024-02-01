calcularTasaInteres = function(ingresoAnual){
    let componente;
    let valorIngresado;
    let valorTasa;
    componente = document.getElementById("ingAnual");
    valorIngresado = componente.value;
    ingresoAnual = parseFloat(valorIngresado);
    if(ingresoAnual < 300000){
        valorTasa = ingresoAnual * 0.16;
        mostrarTexto("tasaInt", "Valor de la tasa: " + valorTasa);
    }else if(ingresoAnual < 500000){
        valorTasa = ingresoAnual * 0.15;
        mostrarTexto("tasaInt", "Valor de la tasa: " + valorTasa);
    }else if(ingresoAnual < 1000000){
        valorTasa = ingresoAnual * 0.14;
        mostrarTexto("tasaInt", "Valor de la tasa: " + valorTasa);
    }else if(ingresoAnual < 2000000){
        valorTasa = ingresoAnual * 0.13;
        mostrarTexto("tasaInt", "Valor de la tasa: " + valorTasa);
    }else if(ingresoAnual >= 2000000){
        valorTasa = ingresoAnual * 0.12;
        mostrarTexto("tasaInt", "Valor de la tasa: " + valorTasa);
    }
}

calcularCapacidadPago = function(edad, ingresos, egresos){
    let capacidad;

    let componenteIng;
    let valorIng;
    componenteIng = document.getElementById("txtIngresos");
    valorIng = componenteIng.value;
    ingresos = parseFloat(valorIng);

    let componenteFloat;
    let valorFloat;
    componenteFloat = document.getElementById("txtEgresos");
    valorFloat = componenteFloat.value;
    egresos = parseFloat(valorFloat);

    let cmpEdad;
    let valorEdad;
    cmpEdad = document.getElementById("txtEdad");
    valorEdad = cmpEdad.value;
    edad = parseInt(valorEdad);

    if(edad > 50){
        capacidad = (egresos - ingresos) * 0.30;
        mostrarTexto("lblCapacidad", "Valor de la cuota es: " + capacidad);
    }else if(edad <= 50){
        capacidad = (egresos - ingresos) * 0.40;
        mostrarTexto("lblCapacidad", "Valor de la cuota es: " + capacidad);
    }
}

calcularDescuento = function(precio, cantidad){
    let valorDesc;

    let componenteFloat;
    let valorFloat;
    componenteFloat = document.getElementById("txtPrecio");
    valorFloat = componenteFloat.value;
    precio = parseFloat(valorFloat);

    let cmpInt;
    let valorInt;
    cmpInt = document.getElementById("txtCantidad");
    valorInt = cmpInt.value;
    cantidad = parseInt(valorInt);

    if(cantidad < 3){
        mostrarTexto("lblDescuento", "Valor del descuento: " + precio);
    }else if(cantidad >= 3 && cantidad <= 5){
        valorDesc = precio * 0.2;
        mostrarTexto("lblDescuento", "Valor del descuento: " + valorDesc);
    }else if(cantidad >= 6 && cantidad <= 11){
        valorDesc = precio * 0.3;
        mostrarTexto("lblDescuento", "Valor del descuento: " + valorDesc);
    }else if(cantidad >= 12){
        valorDesc = precio * 0.4;
        mostrarTexto("lblDescuento", "Valor del descuento: " + valorDesc);
    }
}

determinarColesterolDLD = function(nivelColesterol){
    let componenteFloat;
    let valorFloat;
    componenteFloat = document.getElementById("txtColesterol");
    valorFloat = componenteFloat.value;
    nivelColesterol = parseFloat(valorFloat);

    if(nivelColesterol < 200 && nivelColesterol >= 195){
        mostrarTexto("categoria", "Resultado: CATEGORIA DE COLESTEROL TOTAL" );
        mostrarTexto("nivel", "Deseable");
    }else if(nivelColesterol >= 200 && nivelColesterol <= 239){
        mostrarTexto("categoria", "Resultado: CATEGORIA DE COLESTEROL TOTAL" );
        mostrarTexto("nivel", "Límite superior del rango normal");
    }else if(nivelColesterol > 239){
        mostrarTexto("categoria", "Resultado: CATEGORIA DE COLESTEROL TOTAL" );
        mostrarTexto("nivel", "Alto");
    }else if(nivelColesterol < 100 && nivelColesterol >= 80){
        mostrarTexto("categoria", "Resultado: CATEGORIA DE COLESTEROL LDL" );
        mostrarTexto("nivel", "Óptimo (Lo mejor para su salud)");
    }else if(nivelColesterol >= 100 && nivelColesterol <= 129){
        mostrarTexto("categoria", "Resultado: CATEGORIA DE COLESTEROL LDL" );
        mostrarTexto("nivel", "Casi óptimo");
    }else if(nivelColesterol >= 130 && nivelColesterol <= 159){
        mostrarTexto("categoria", "Resultado: CATEGORIA DE COLESTEROL LDL" );
        mostrarTexto("nivel", "Límite superior del rango normal");
    }else if(nivelColesterol >= 160 && nivelColesterol <= 189){
        mostrarTexto("categoria", "Resultado: CATEGORIA DE COLESTEROL LDL" );
        mostrarTexto("nivel", "Alto");
    }else if(nivelColesterol >= 190){
        mostrarTexto("categoria", "Resultado: CATEGORIA DE COLESTEROL LDL" );
        mostrarTexto("nivel", "Muy alto");
    }else if(nivelColesterol >= 60 && nivelColesterol <= 79){
        mostrarTexto("categoria", "Resultado: CATEGORIA DE COLESTEROL HDL" );
        mostrarTexto("nivel", "Se considera que protege de la enfermedad del corazón");
    }else if(nivelColesterol > 40 && nivelColesterol <= 59){
        mostrarTexto("categoria", "Resultado: CATEGORIA DE COLESTEROL HDL" );
        mostrarTexto("nivel", "Cuanto más alto, mejor");
    }else if(nivelColesterol <= 40){
        mostrarTexto("categoria", "Resultado: CATEGORIA DE COLESTEROL HDL" );
        mostrarTexto("nivel", "Uno de los principales factores de riesgo de enfermedad del corazón ");
    }
}

validarClave = function(clave){
    let clavePro;
    clave = recuperarTexto("password");
    clavePro = clave.length;

    if(clavePro >= 8 && clavePro <= 16){
        mostrarTexto("verificar", "Contraseña válida" );
    } else{
        mostrarTexto("verificar", "Contraseña inválida" );
    }


}

esMayuscula = function(caracter){
    let cmpCaracter
    cmpCaracter = recuperarTexto("letra");
    caracter = cmpCaracter.charCodeAt(0);

    if(caracter >= 65 && caracter <= 90){
        mostrarTexto("idLetra", "Es Mayúscula" );
    } else if(caracter >= 97 && caracter <= 122 ){
        mostrarTexto("idLetra", "No es Mayúscula" );
    }else {
        mostrarTexto("idLetra", "No es letra" );
    }

}

esMinuscula = function(caracter){
    let cmpCaracter
    cmpCaracter = recuperarTexto("letraMin");
    caracter = cmpCaracter.charCodeAt(0);

    if(caracter >= 97 && caracter <= 122){
        mostrarTexto("idLetraMin", "Es minúscula" );
    }else if(caracter == 225 || caracter == 233 || caracter == 237 || caracter == 243 || caracter == 250){
        mostrarTexto("idLetraMin", "Es minúscula pero con tilde")
    }
}

esDigito = function(caracter){
    let cmpCaracter
    cmpCaracter = recuperarTexto("letraDig");
    caracter = cmpCaracter.charCodeAt(0);

    if(caracter >= 48 && caracter <= 57){
        mostrarTexto("idLetraDig", "Sí es un dígito")
    }else {
        mostrarTexto("idLetraDig", "No es un dígito")
    }
}

darPermiso = function(notaMatematica, notaFisica, notaGeometria){
    let cmpMate;
    let valorFloat;
    cmpMate = document.getElementById("mate");
    valorFloat = cmpMate.value;
    notaMatematica = parseFloat(valorFloat);

    let cmpFisica;
    let floatFisica;
    cmpFisica = document.getElementById("fisica");
    floatFisica = cmpFisica.value;
    notaFisica = parseFloat(floatFisica);

    let cmpGeometria;
    let floatGeo;
    cmpGeometria = document.getElementById("geometrica");
    floatGeo = cmpGeometria.value;
    notaGeometria = parseFloat(floatGeo);

    if(notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90){
        mostrarTexto("permiso", "Tienes el permiso");
    }else {
        mostrarTexto("permiso", "No tienes el permiso");
    }
}

otorgarPermiso = function(notaMatematica, notaFisica, notaGeometria){
    let cmpMate;
    let valorFloat;
    cmpMate = document.getElementById("mateOt");
    valorFloat = cmpMate.value;
    notaMatematica = parseFloat(valorFloat);

    let cmpFisica;
    let floatFisica;
    cmpFisica = document.getElementById("fisicaOt");
    floatFisica = cmpFisica.value;
    notaFisica = parseFloat(floatFisica);

    let cmpGeometria;
    let floatGeo;
    cmpGeometria = document.getElementById("geometricaOt");
    floatGeo = cmpGeometria.value;
    notaGeometria = parseFloat(floatGeo);

    if(notaMatematica > 90 && notaGeometria > 80 || notaFisica > 90 && notaGeometria > 80){
        mostrarTexto("permisoOt", "Tienes el permiso");
    }else {
        mostrarTexto("permisoOt", "No tienes el permiso");
    }
}

dejarSalir = function(notaMatematica, notaFisica, notaGeometria){
    let cmpMate;
    let valorFloat;
    cmpMate = document.getElementById("mateIn");
    valorFloat = cmpMate.value;
    notaMatematica = parseFloat(valorFloat);

    let cmpFisica;
    let floatFisica;
    cmpFisica = document.getElementById("fisicaIn");
    floatFisica = cmpFisica.value;
    notaFisica = parseFloat(floatFisica);

    let cmpGeometria;
    let floatGeo;
    cmpGeometria = document.getElementById("geometricaIn");
    floatGeo = cmpGeometria.value;
    notaGeometria = parseFloat(floatGeo);

    if(notaMatematica > 90 && notaFisica > notaMatematica|| notaFisica > 90 && notaFisica > notaMatematica|| notaGeometria > 90 && notaFisica > notaMatematica ){
        mostrarTexto("permisoIn", "Tienes el permiso");
    }else {
        mostrarTexto("permisoIn", "No tienes el permiso");
    }
}