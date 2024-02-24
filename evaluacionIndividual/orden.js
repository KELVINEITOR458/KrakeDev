let personas =[{nombre: "Marcos", edad: 18},
           {nombre: "Roberto", edad: 15},
           {nombre: "Kate", edad: 25},
           {nombre: "Diana", edad: 12},
           {nombre: "Benja", edad: 5}]

let errorEdad = false;
let errorNombre = false;
agregarPersona = function(){
    let nombre;
    nombre = recuperarTexto("txtNombre");
    let nombreLenght;
    nombreLenght = nombre.length;
    if(nombreLenght < 3){
        mostrarTexto("lblErrorNombre", "El nombre debe tener almenos 3 caracteres");
        errorNombre = true;
    }else{
        mostrarTexto("lblErrorNombre", "");
        errorNombre = false;
    }

    let edad;
    edad = recuperarInt("txtEdad");
    if(edad >= 0 && edad <= 100){
        mostrarTexto("lblErrorEdad", "");
        errorEdad = false;
    }else{
        mostrarTexto("lblErrorEdad", "La edad debe ser entre 0 y 100");
        errorEdad = true;
    }

    let nuevaPersona = {};
    if(errorEdad == false && errorNombre == false){
        nuevaPersona.nombre = nombre;
        nuevaPersona.edad = edad;
        personas.push(nuevaPersona);
        alert("Persona agregada correctamente");
        mostrarPersonas();
    }

}

mostrarPersonas = function(){
    let cmpTabla = document.getElementById("tablaPersonas");
    let contenidoTabla = "<table><tr>"+
    "<th>EDAD</th>"+
    "<th>NOMBRE</th>"+
    "</tr>";

    let elementoPersona;
    for(let i=0; i < personas.length; i++){
        elementoPersona = personas[i];
        contenidoTabla +=
        "<tr><td>" + elementoPersona.edad 
        + "</td>"+
        "<td>" + elementoPersona.nombre
        + "</td>" +
        "</tr>";
    }

    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

encontrarMayor = function(){
    let personaMayor;
    personaMayor = personas[0];
    let elementoPersona;
    for(let i=1;i<personas.length; i++){
        elementoPersona = personas[i];
        if(elementoPersona.edad > personaMayor.edad){
            personaMayor = elementoPersona;
        }

    }
    return personaMayor;
}

encontrarMenor = function(){
    let personaMenor;
    personaMenor = personas[0];
    let elementoPersona;
    for(let i=1; i<personas.length; i++){
        elementoPersona = personas[i];
        if(elementoPersona.edad < personaMenor.edad){
            personaMenor = elementoPersona;
        }
    }
    return personaMenor;
}

mostrarMayor = function(){
    let mayor;
    mayor = encontrarMayor();
    mostrarTexto("mayor", mayor.nombre);
}

mostrarMenor = function(){
    let menor;
    menor = encontrarMenor();
    mostrarTexto("menor", menor.nombre);
}
