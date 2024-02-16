let clientes = [{cedula : 121221, nombre: "Kelvin", edad : 17},
                {cedula : 343434, nombre: "Anahi", edad : 21}, 
                {cedula : 155422, nombre: "Fernando", edad : 18}
];

guardarCambios = function(){
    let valorNombre; 
    valorNombre = recuperarTexto("txtNombre");
    let valorCedula;
    valorCedula = recuperarTexto("txtCedula");
    let valorEdad;
    valorEdad = recuperarFloat("txtEdad");

    let datosCliente = {};
    datosCliente.cedula = valorCedula;
    datosCliente.nombre = valorNombre;
    datosCliente.edad = valorEdad;

    modificarCliente(datosCliente);

    mostrarClientes();
}

modificarCliente = function(cliente){
    let clienteEncontrado;
    clienteEncontrado = buscarCliente(cliente.cedula);
    if(clienteEncontrado != null){
        clienteEncontrado.nombre = cliente.nombre;
        clienteEncontrado.edad = cliente.edad;
    }
}

ejecutarBusqueda = function(){
    let valorCedula;
    valorCedula = recuperarTexto("txtCedulaBusqueda");
    let cliente;
    cliente = buscarCliente(valorCedula);
    if(cliente == null){
        alert("Cliente no encontrado");
    }else{
        mostrarTextoEnCaja("txtCedula", cliente.cedula);
        mostrarTextoEnCaja("txtNombre", cliente.nombre);
        mostrarTextoEnCaja("txtEdad", cliente.edad);
    }
}

crearCliente = function(){
    let valorNombre; 
    valorNombre = recuperarTexto("txtNombre");
    let valorCedula;
    valorCedula = recuperarTexto("txtCedula");
    let valorEdad;
    valorEdad = recuperarFloat("txtEdad");

    let nuevoCliente = {};
    nuevoCliente.cedula = valorCedula;
    nuevoCliente.nombre = valorNombre;
    nuevoCliente.edad = valorEdad;

    agregarCliente(nuevoCliente);
}

agregarCliente = function(cliente){
    let resultado;
    resultado = buscarCliente(cliente.cedula);
    if(resultado == null){
        clientes.push(cliente);
    }else{
        alert("La cédula ya esta registrada " + cliente.cedula);
    }
    
}

buscarCliente = function(cedula){
    let elementoCliente;
    let clienteEncontrado = null;
    for(let i=0; i < clientes.length; i++){
        elementoCliente = clientes[i];
        if(elementoCliente.cedula == cedula){
            clienteEncontrado = elementoCliente;
            break;
        }
    }
    return clienteEncontrado;
}

mostrarClientes = function(){
    let cmpTabla = document.getElementById("tablaClientes");
    let contenidoTabla = "<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>EDAD</th>"
    +"</tr>";
    let elementoCliente; 
    for(let i=0; i < clientes.length; i++){
        elementoCliente = clientes[i];
        contenidoTabla += 
        "<tr><td>"+ elementoCliente.cedula + "</td>" + 
        "<td>" + elementoCliente.nombre + "</td>"+
        "<td>" + elementoCliente.edad + "</td>"
        + "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}