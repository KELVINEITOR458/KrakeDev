probarAtributos = function(){
    let persona = {
        nombre : "Kelvin",
        apellido : "Bermeo",
        edad : 17,
        estaVivo : true
    }

    console.log(persona.nombre);
    console.log(persona.edad);

    if(persona.estaVivo == false){
        console.log("NO ESTA VIVO");
    }else{
        console.log("ESTA VIVO!!!!!!");
    }
}

modificarAtributos = function(){
    let cuenta = {
        numero : 40349349,
        saldo : 0.0,
    }

    cuenta.saldo = 100;
    cuenta.saldo += 10;

    console.log(cuenta.saldo);
}

crearCliente = function(){
    let cliente = {
        cedula : 1727039917,
        nombre : "Kelvin"
    }

    let cliente1 = {};
    cliente1.nombre = "Yaneli";
    cliente1.apellido = "Velez";
    cliente1.cedula = 2356423998;
}

probarIncrementoSaldo = function(){
    let cta = {
        numero : "23443",
        saldo : 34.0
    }
    incrementarSaldo(cta, 100);
    console.log(cta.saldo);
}

incrementarSaldo = function(cuenta, monto){
    cuenta.saldo += monto;
}

probarDeterminarMayor = function(){
    let persona1 = {
        nombre : "Jhon",
        edad : 17
    }

    let persona2 = {
        nombre : "Jose",
        edad : 19
    }

    let mayor;
    mayor = determinarMayor(persona1, persona2);
    if(mayor != null){
        console.log("El mayor es" +  mayor.nombre);
    }
}

determinarMayor = function(persona1, persona2){
    if(persona1.edad > persona2.edad){
        return persona1;
    }else if(persona1.edad < persona2.edad){
        return persona2;
    }else{
        return null;
    }
}

crearProducto = function(){
    let producto1 = {
        nombre : "hola",
        precio : 50.3,
        stock : 20
    }

    let producto2 = {
        nombre : "adios",
        precio : 20.5,
        stock : 50
    }

    console.log(producto1.nombre);
    console.log(producto2.precio);

    if(producto1.stock > producto2.stock){
        console.log("El producto 1 tiene mas stock");
    }else if(producto1.stock < producto2.stock){
        console.log("El producto 2 tiene mas stock");
    }else if(producto1.stock == producto2.stock){
        console.log("Ambos productos tienen el mismo stock");
    }
}