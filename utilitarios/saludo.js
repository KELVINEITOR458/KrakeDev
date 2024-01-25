saludar = function(){
    //recuperar el valor de la caja de texto
    let nombre;
    nombre = saludarTexto("txtNombre");
     //recuperar el valor de la caja txt apellido
     let apellido;
     apellido = saludarTexto("txtApellido");
}



saludarTexto = function(idComponente){
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

