calcularValorDescuento = function(monto, porcentajeDescuento){
    let descuento;
    descuento = (monto * porcentajeDescuento) / 100;
    return descuento;
}

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