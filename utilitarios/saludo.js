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
 

    let mensajeBienvenida 
    mensajeBienvenida = "Bienvenido " + nombre + " " + apellido;
    mostrarTexto("lblResultado",mensajeBienvenida);

    mostrarImagen("imagenSaludo", "imagenes/saludo.gif");

    mostrarTextoEnCaja("txtNombre", " ")
}