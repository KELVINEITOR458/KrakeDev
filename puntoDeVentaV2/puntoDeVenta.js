calcularValorTotal = function(){
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto;
    let cantidad;
    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    let resumen;
    
    nombreProducto = recuperarTexto("txtProducto"); 
    precioProducto = recuperarFloat("txtPrecio");
    cantidad = recuperarInt("txtCantidad");

    valorSubtotal = calcularSubtotal(cantidad, precioProducto);

    valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);

    valorIVA = calcularIVA(valorSubtotal - valorDescuento);
    

    valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);

    esProductoValido(nombreProducto, "lblError1");
    esPrecioValido(precioProducto, "lblError3");
    esCantidadValida(cantidad, "lblError2");


    if(esProductoValido(nombreProducto, "lblError1") && esPrecioValido(precioProducto, "lblError3") && esCantidadValida(cantidad, "lblError2")){
        mostrarTexto("lblSubtotal", valorSubtotal);
        mostrarTexto("lblDescuento", valorDescuento);
        mostrarTexto("lblValorIVA", valorIVA);
        mostrarTexto("lblTotal", valorTotal);
        
        resumen = document.getElementById("lblResumen");
        resumen.innerText = "Valor a pagar por " + cantidad + " " +  nombreProducto + " " + "es: " + valorTotal; 
        
        
    }else{
        esProductoValido(nombreProducto, "lblError1");
        esPrecioValido(precioProducto, "lblError3");
        esCantidadValida(cantidad, "lblError2");
    }
    

}   
limpiar=function(){
    let limpiarPrecio;
    limpiarPrecio = 0.0;
    let limpiarProducto;
    limpiarProducto = " ";
    let limpiarCantidad;
    limpiarCantidad = 0;
    let limpiarDescuento;
    limpiarDescuento = 0;

    let limpiarLblSubTotal;
    limpiarLblSubTotal = " ";
    let limpiarLblDescuento;
    limpiarLblDescuento = " ";
    let limpiarlblIVA;
    limpiarlblIVA = " ";
    let limpiarLblTotal;
    limpiarLblTotal = " ";
    let limpiarResumen;
    limpiarResumen = " ";


    mostrarTextoEnCaja("txtPrecio", limpiarPrecio);
    mostrarTextoEnCaja("txtProducto", limpiarProducto);
    mostrarTextoEnCaja("txtCantidad", limpiarCantidad);
    mostrarTextoEnCaja("txtPorcentajeDescuento", limpiarDescuento);
    mostrarTexto("lblSubtotal", limpiarLblSubTotal);
    mostrarTexto("lblDescuento", limpiarLblDescuento);
    mostrarTexto("lblValorIVA", limpiarlblIVA);
    mostrarTexto("lblTotal", limpiarLblTotal);
    mostrarTexto("lblResumen", limpiarResumen);
}


calcularDescuentoPorVolumen = function(subtotal, cantidad){
    let descuento;
    if(cantidad < 3){
        descuento = 0.0;
        return descuento;
    }else if(cantidad >= 3 && cantidad <= 5){
        descuento = subtotal * 0.03;
        return descuento;
    }else if(cantidad >= 6 && cantidad <= 11){
        descuento = subtotal * 0.04;
        return descuento;
    } else if(cantidad >= 12){
        descuento = subtotal * 0.05;
        return descuento;
    }
}


esProductoValido = function(txt, idComponente){
    if(txt == ""){
        mostrarTexto(idComponente, "*CAMPO OBLIGATORIO");
        return false;
    }else{
        let txtPro;
        txtPro = txt.length;
        if(txtPro >= 11){
            mostrarTexto(idComponente, "EL nombre del producto no puede tener mas de 10 caracteres");
            return false;
        }
        mostrarTexto(idComponente, "");
        return true;
    }
}

esPrecioValido = function(txt, idComponente){
    if(isNaN(txt)){
        mostrarTexto(idComponente, "*CAMPO OBLIGATORIO");
        return false;
    }else{
        if(txt > 50 || txt < 0){
            mostrarTexto(idComponente, "El precio debe entre 0 y 50");
            return false;
        }else{
            mostrarTexto(idComponente, "");
            return true;
        }
    }
}

esCantidadValida = function(txt, idComponente){
    if(isNaN(txt)){
        mostrarTexto(idComponente, "*CAMPO OBLIGATORIO");
        return false;
    }else{
        if(txt <= -1 || txt >= 100){
            mostrarTexto(idComponente, "La cantidad debe ser un numero entero entre 0 y 100");
            return false
        }else{
            mostrarTexto(idComponente, "");
            return true;
        }
    }
}

