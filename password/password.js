validarPassword = function(password){
    let noHayErrores = true;
    let cmpPassword
    cmpPassword = recuperarTexto("txtContra");
    password = cmpPassword.length;
    if(password < 8){
        mostrarTexto("errorLong", "La contraseña no puede tener menos de 8 caracteres" );
        noHayErrores = false;
    }else if(password > 16){
        mostrarTexto("errorLong", "La contraseña no puede tener más de 16 caracteres" );
        noHayErrores = false;
    }else{
        mostrarTexto("errorLong", "");
        mostrarTexto("error1", "contraseña válida");
        noHayErrores = true;
    }

    if(noHayErrores == true){
        let mayus;
        for(let i=0; i< password; i++){
            mayus= cmpPassword.charCodeAt(i);
            if(mayus >= 65 && mayus <= 90){
                mostrarTexto("errorMayus", "");
                noHayErrores = true;
                break;
            }else{
                mostrarTexto("errorMayus", "La contraseña debe tener almenos 1 mayúscula");
                noHayErrores = false;
            }
        } 
    }

    if(noHayErrores == true){
        let mayus;
        for(let i=0; i< password; i++){
            mayus= cmpPassword.charCodeAt(i);
            if(mayus >= 48 && mayus <= 57){
                mostrarTexto("errorNum", "");
                noHayErrores = true;
                break;
            }else{
                mostrarTexto("errorNum", "La contraseña debe tener almenos 1 dígito");
                noHayErrores = false;
            }
        } 
    }

    if(noHayErrores == true){
        let mayus;
        for(let i=0; i< password; i++){
            mayus= cmpPassword.charCodeAt(i);
            if(mayus == 42 || mayus == 45 || mayus == 95){
                mostrarTexto("errorCara", "");
                noHayErrores = true;
                break;
            }else{
                mostrarTexto("errorCara", "La contraseña debe tener almenos 1 caracter, pueden ser (*) (-) (_)");
                noHayErrores = false;
            }
        } 
    }


    if(noHayErrores == true){
        mostrarTexto("error1", "contraseña válida");
    }else{
        mostrarTexto("error1", "contraseña no válida");
    }
}

ejecutarValidacion = function(){
    validarPassword("txtContra");
}