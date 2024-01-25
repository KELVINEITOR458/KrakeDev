saludar = function(){
    //recuperar el valor de la caja de texto
    let nombre;
    nombre = saludarTexto("txtNombre");
     //recuperar el valor de la caja txt apellido
     let apellido;
     apellido = saludarTexto("txtApellido");
     //recuperar Int
     let entero;
     entero = recuperarInt("txtEdad");
     //recuperar Float
     let flotante;
     flotante = recuperarFloat("txtEstatura");

}



saludarTexto = function(idComponente){
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

recuperarInt = function(idComponente){
    let valorCaja;
    let valorEntero;
    valorCaja = saludarTexto(idComponente);
    valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja;
    let valorFloat;
    valorCaja = saludarTexto(idComponente);
    valorFloat = parseFloat(valorCaja);
    return valorFloat;
}