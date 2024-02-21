let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1727039917",nombre:"Kelvin",apellido:"Bermeo",sueldo:1200.0}
]

mostrarOpcionEmpleado = function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
    deshabilitarComponentes();

}

mostrarOpcionRol = function(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
    deshabilitarComponente("btnGuardarRol");
    mostrarRoles();
}

mostrarOpcionResumen = function(){
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}

mostrarEmpleados = function(){
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>APELLIDO</th>"+
    "<th>SUELDO</th>"
    +"</tr>";
    let elementoEmpleado; 
    for(let i=0; i < empleados.length; i++){
        elementoEmpleado = empleados[i];
        contenidoTabla += 
        "<tr><td>"+ elementoEmpleado.cedula + "</td>" + 
        "<td>" + elementoEmpleado.nombre + "</td>"+
        "<td>" + elementoEmpleado.apellido + "</td>"+
        "<td>" + elementoEmpleado.sueldo + "</td>"
        + "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

let esNuevo = false;

ejecutarNuevo = function(){
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");

    esNuevo = true;
}



agregarEmpleado = function(empleado){
    let resultado;
    resultado = buscarEmpleado(empleado.cedula);
    if(resultado == null){
        empleados.push(empleado);
        
        return true;
    }else{
        alert("YA EXISTE EL EMPLEADO CON CEDULA: " + empleado.cedula);
        return false;
    }
}

guardar = function(){
    let nombreReal = false;
    let apellidoReal = false;
    let cedulaReal = false;
    let sueldoReal = false;

    let cmpCedula;
    cmpCedula = recuperarTexto("txtCedula");
    let cedulaCant;
    cedulaCant = cmpCedula.length;
    let cedulaDig;
    cedulaDig = digito(cedulaCant, cmpCedula);
    if(cedulaCant == 10 && cedulaDig == true){
        mostrarTexto("lblErrorCedula", "");
        cedulaReal = true;
    }else{
        mostrarTexto("lblErrorCedula", "Debe contener 10 caracteres y todos deben ser digitos");
        cedulaReal = false;
    }

    let cmpNombre;
    let cmpApellido;
    let nombreCant;
    let apellidoCant;
    let mayusNombre;
    let mayusApellido;
    cmpNombre = recuperarTexto("txtNombre");
    cmpApellido = recuperarTexto("txtApellido");
    nombreCant = cmpNombre.length;
    apellidoCant = cmpApellido.length;
    mayusNombre = mayuscula(nombreCant, cmpNombre);
    mayusApellido = mayuscula(apellidoCant, cmpApellido);
    if(nombreCant >= 3 && mayusNombre ==true){
        mostrarTexto("lblErrorNombre", "");
        nombreReal = true;
    }else{
        mostrarTexto("lblErrorNombre", "El nombre debe tener almenos 3 caracteres y deben ser mayusculas");
        nombreReal = false;
    }
    if(apellidoCant >= 3 && mayusApellido == true){
        mostrarTexto("lblErrorApellido", "");
        apellidoReal = true;
    }else{
        mostrarTexto("lblErrorApellido", "El apellido debe tener almenos 3 caracteres y deben ser mayusculas");
        apellidoReal = false;
    }

    let sueldoFloat;
    sueldoFloat = recuperarFloat("txtSueldo");

    if(sueldoFloat >= 400 && sueldoFloat <= 5000){
        mostrarTexto("lblErrorSueldo", "");
        sueldoReal = true;
    }else{
        mostrarTexto("lblErrorSueldo", "El sueldo debe ser entre 400 y 5000");
        sueldoReal = false;
    }

    objetoEmpleado = {};

    if(esNuevo == true && nombreReal == true && apellidoReal == true && cedulaReal == true && sueldoReal == true){
        objetoEmpleado.cedula = cmpCedula;
        objetoEmpleado.nombre = cmpNombre;
        objetoEmpleado.apellido = cmpApellido;
        objetoEmpleado.sueldo = sueldoFloat;

        let empleadoNuevo;
        empleadoNuevo = agregarEmpleado(objetoEmpleado);
        if(empleadoNuevo == true){
            alert("EMPLEADO GUARDADO CORRECTAMENTE");
            mostrarEmpleados();
            deshabilitarComponentes();
            

        }
    }

    if(esNuevo == false){
        objetoEmpleado.cedula = cmpCedula;
        objetoEmpleado.nombre = cmpNombre;
        objetoEmpleado.apellido = cmpApellido;
        objetoEmpleado.sueldo = sueldoFloat;
        modificarEmpleado(objetoEmpleado);
        deshabilitarComponentes();
    }
    
}

mayuscula = function(caracter, txt){
    let mayus;
        for(let i=0; i< caracter; i++){
            mayus= txt.charCodeAt(i);
            if(mayus >= 65 && mayus <= 90){
                return true;
            }else{
                return false;
            }
        }
}

digito = function(caracter, txt){
    let digit;
        for(let i=0; i< caracter; i++){
            digit= txt.charCodeAt(i);
            if(digit >= 48 && digit <= 57){
                return true;
            }else{
                return false;
            }
        }
}

deshabilitarComponentes = function(){
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

ejecutarBusqueda = function(){
    let valorEmpleado;
    valorEmpleado = recuperarTexto("txtBusquedaCedula");
    let empleado;
    empleado = buscarEmpleado(valorEmpleado);
    if(empleado == null){
        alert("Empleado no existe");
    }else{
        mostrarTextoEnCaja("txtCedula", empleado.cedula);
        mostrarTextoEnCaja("txtNombre", empleado.nombre);
        mostrarTextoEnCaja("txtApellido", empleado.apellido);
        mostrarTextoEnCaja("txtSueldo", empleado.sueldo);

        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        habilitarComponente("btnGuardar")
        deshabilitarComponente("txtCedula");
        esNuevo = false;
    }
}



modificarEmpleado = function(empleado){
    let buscar;
        buscar = buscarEmpleado(empleado.cedula);
        if(buscar != null){
            buscar.nombre = empleado.nombre;
            buscar.apellido = empleado.apellido;
            buscar.sueldo = empleado.sueldo;
            alert("EMPLEADO MODIFICADO EXITOSAMENTE");
            mostrarEmpleados();
        }
}


buscarEmpleado = function(cedula){
    let elementoCedula;
    let cedulaEncontrada = null;
    for(let i=0; i < empleados.length; i++){
        elementoCedula = empleados[i];
        if(elementoCedula.cedula == cedula){
            cedulaEncontrada = elementoCedula;
            break;
        }
    }
    return cedulaEncontrada;
}

limpiar = function(){
    deshabilitarComponentes();
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
    esNuevo = false;
}

buscarPorRol = function(){
    let buscarEmpleadoRol;
    buscarEmpleadoRol = recuperarTexto("txtBusquedaCedulaRol");
    let empleado;
    empleado = buscarEmpleado(buscarEmpleadoRol);
    if(empleado == null){
        alert("Empleado no existe");
    }else{
        mostrarTexto("infoCedula", empleado.cedula);
        mostrarTexto("infoNombre", empleado.nombre + " " + empleado.apellido);
        mostrarTexto("infoSueldo", empleado.sueldo);

        mostrarTexto("infoIESS", 0.0);
        mostrarTexto("infoPago", 0.0);
        mostrarTextoEnCaja("txtDescuentos", "");
    }
}

calcularAporteEmpleado = function(sueldo){
    let sueldoPorciento;
    sueldoPorciento = (sueldo * 9.45) / 100;
    return sueldoPorciento;
}

calcularValorAPagar = function(sueldo, iess, descuento){
    let valorAPagar;
    valorAPagar = sueldo - (iess - descuento);
    return valorAPagar;
}

calcularRol = function(){
    hayErrores = true;
    let sueldo;
    let validarDescuento;
    let descuento;
    sueldo = recuperarFloatDiv("infoSueldo");
    validarDescuento = recuperarFloat("txtDescuentos");

    if(validarDescuento >= 0 && validarDescuento <= sueldo){
        descuento = validarDescuento;
        mostrarTexto("lblErrorDescuentos", "");
        hayErrores = false
    }else{
        mostrarTexto("lblErrorDescuentos", "El valor no debe ser menor a 0 y tampoco mayor al sueldo");
        hayErrores = true
    }

    if(hayErrores == false){
        let aporte;
        aporte = calcularAporteEmpleado(sueldo);
        mostrarTexto("infoIESS", aporte);
    
        let valorPagar;
        valorPagar = calcularValorAPagar(sueldo, aporte, descuento);
        mostrarTexto("infoPago", valorPagar);

        habilitarComponente("btnGuardarRol");
    }
    
}

let roles = [];

buscarRol = function(cedula){

    let elementoRol;
    let rolEncontrado = null;
    for(let i=0; i < roles.length; i++){
        elementoRol = roles[i];
        if(elementoRol.cedula == cedula){
            rolEncontrado = elementoRol;
            break;
        }
    }
    return rolEncontrado;
    
}

agregarRol = function(rol){
    let resultado;
    resultado = buscarRol(rol.cedula);
    if(resultado == null){
        roles.push(rol);
        return true;
    }else{
        alert("YA EXISTE EL EMPLEADO CON CEDULA: " + rol.cedula);
        return false;
    }
}

calcularAporteEmpleador = function(sueldo){
    let valor;
    valor = (sueldo * 11.15) / 100;
    return valor;
}

guardarRol = function(){
    let valorPagar;
    let aporteEmpleado;
    let nombre;
    let cedula;
    let sueldo;
    valorPagar = recuperarFloatDiv("infoPago");
    aporteEmpleado = recuperarFloatDiv("infoIESS");
    nombre = recuperarTextoDiv("infoNombre");
    cedula = recuperarTextoDiv("infoCedula");
    sueldo = recuperarFloatDiv("infoSueldo");

    let aporteEmpleador;
    aporteEmpleador = calcularAporteEmpleador(sueldo);

    let objetoRol = {};
    objetoRol.cedula = cedula;
    objetoRol.nombre = nombre;
    objetoRol.sueldo = sueldo;
    objetoRol.valorAPagar = valorPagar;
    objetoRol.valorEmpleado = aporteEmpleado;
    objetoRol.valorEmpleador = aporteEmpleador;

    let agregar;
    agregar = agregarRol(objetoRol);

    if(agregar == true){
        alert("EXITO");
        deshabilitarComponente("btnGuardarRol");
    }

    mostrarTotales();
    mostrarRoles();
}

mostrarRoles = function(){
    let cmpTabla = document.getElementById("tablaResumen");
    let contenidoTabla = "<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>VALOR A PAGAR</th>"+
    "<th>APORTE EMPLEADO</th>"+
    "<th>APORTE EMPLEADOR</th>"
    +"</tr>";
    let elementoRol; 
    for(let i=0; i < roles.length; i++){
        elementoRol = roles[i];
        contenidoTabla += 
        "<tr><td>"+ elementoRol.cedula + "</td>" + 
        "<td>" + elementoRol.nombre + "</td>"+
        "<td>" + elementoRol.valorAPagar + "</td>"+
        "<td>" + elementoRol.valorEmpleado + "</td>"+
        "<td>" + elementoRol.valorEmpleador + "</td>"
        + "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

mostrarTotales = function(){
    let totalEmpleado = 0.0;
    let totalEmpleador = 0.0;
    let totalAPagar = 0.0;

    for(let i=0; i<roles.length; i++){
        let rolDatos;
        rolDatos = roles[i];
        totalEmpleado += rolDatos.valorEmpleado;
        totalEmpleador += rolDatos.valorEmpleador;
        totalAPagar += rolDatos.valorAPagar;
    }

    mostrarTexto("infoTotalPago", totalAPagar);
    mostrarTexto("infoAporteEmpresa", totalEmpleador);
    mostrarTexto("infoAporteEmpleado", totalEmpleado);

    let totalNomina;
    totalNomina = totalAPagar + totalEmpleado + totalEmpleador;

    mostrarTexto("infoNominaTotal", totalNomina);
}