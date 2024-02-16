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