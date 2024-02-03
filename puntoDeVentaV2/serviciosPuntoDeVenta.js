
calcularIVA = function(monto){
    let iva;
    iva = monto * 0.12;
    return iva;
}

calcularSubtotal = function(cantidad, precio){
    let subTotal;
    subTotal = precio * cantidad;
    return subTotal;
}

calcularTotal = function(subTotal, descuento, iva){
    let total;
    total = (subTotal + iva) - descuento;
    return total;
}