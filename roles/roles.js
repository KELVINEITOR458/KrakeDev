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
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");

}

mostrarOpcionRol = function(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
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
    esNuevo = true;
    
}