validarPassword = function(password){
    let noHayErrores = true;
    let cmpPassword
    cmpPassword = recuperarTexto("txtContra");
    password = cmpPassword.length;
    if(password < 8){
        mostrarTexto("error1", "La contraseña no puede tener menos de 8 caracteres" );
        noHayErrores = false;
    }else if(password > 16){
        mostrarTexto("error1", "La contraseña no puede tener más de 16 caracteres" );
        noHayErrores = false;
    }else{
        mostrarTexto("error1", "contraseña válida");
        noHayErrores = true;
    }

    if(noHayErrores == true){
        let mayus;
        for(let i=0; i< password.length; i++){
            mayus= password[i];
            if(mayus >= "A" && mayus <= "Z"){
                mostrarTexto("error1", "contraseña válida");
            }else{
                mostrarTexto("error1", "contraseña INVALIDA ")
            }
        }
    }

}











buscarLetra = function(cadena, letra){
    let letraIterada;
    let existeLetra = false;
    for(let i=0; i<cadena.length; i++){
        letraIterada = cadena.charAt(i);
        if(letraIterada == letra){
            existeLetra = true;
        }
    }
    if(existeLetra ==  true){
        console.log("existe");
        return false;
    }else{
        console.log("no existe");
        return true;
    }
}