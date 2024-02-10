//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
let intentos = 0;
let coincidencias = 0;
let errores = 0;



esMayuscula = function(caracter){
    let cmpCaracter;
    let charCaracter;
    cmpCaracter = document.getElementById("txtSecreta");
    charCaracter = cmpCaracter.charCodeAt(0);
    caracter = charCaracter;
    if(caracter >= 65 && caracter <= 90){
        return true;
    }else {
        return false;
    }
}

guardarPalabra = function(){
    let noHayErrores = true;
    let cmppalabra;
    let palabra;
    cmppalabra = recuperarTexto("txtSecreta");
    palabra = cmppalabra.length;

    if(palabra < 5){
        alert("La palabra debe de ser de 5 letras");
        noHayErrores = false;
    }else if(palabra > 5){
        alert("La palabra no debe superar las 5 letras");
        noHayErrores = false;
    }

    if(noHayErrores == true){
        let mayus;

        for(let i=0; i< palabra; i++){
            mayus= cmppalabra.charCodeAt(i);
            if(mayus >= 65 && mayus <= 90){
                palabraSecreta = cmppalabra;
                console.log(palabraSecreta);
                noHayErrores = true;
            }else{
                alert("La palabra debe ser en mayusculas");
                noHayErrores = false;
                break;
            }
        } 
    }
}




mostrarLetra = function(letra, posicion){
    if(posicion == 0){
        mostrarTexto("div0", letra);
    }else if(posicion == 1){
        mostrarTexto("div1", letra);
    }else if(posicion == 2){
        mostrarTexto("div2", letra);
    }else if(posicion == 3){
        mostrarTexto("div3", letra);
    }else if(posicion == 4){
        mostrarTexto("div4", letra);
    }
}


validar = function(letra){
    let letrasEncontradas = 0;
    let char;

    for(let i=0; i < palabraSecreta.length; i++){
        char = palabraSecreta.charAt(i);
        if(char === letra){
            mostrarLetra(letra, i);
            letrasEncontradas = letrasEncontradas + 1;
        }
    }

    if(letrasEncontradas==0){
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores = errores +1;
        console.log("Erroes: " + errores);
        mostrarAhorcado();
    } else{
        coincidencias = coincidencias + 1;
        console.log("Coincidencias: " +  coincidencias);
    }
}

ingresarLetra = function(){
    let letras;
    cmpLetra = recuperarTexto("txtLetra");
    letras = cmpLetra.charCodeAt(0);
    intentos = intentos +1;
    console.log(intentos);


    if(letras >= 65 && letras <= 90){
        validar(cmpLetra);

    }else{
        alert("Debe ingresar una mayuscula");
    }

    if(intentos == 10){
        mostrarImagen("ahorcadoImagen", "gameOver.gif");
    }else if(coincidencias == 5){
        mostrarImagen("ahorcadoImagen", "ganador.gif");
    }
}

mostrarAhorcado = function(){
    if(errores==1){
        mostrarImagen("ahorcadoImagen", "Ahorcado_01.png");
    }else if(errores==2){
        mostrarImagen("ahorcadoImagen", "Ahorcado_02.png");
    }else if(errores==3){
        mostrarImagen("ahorcadoImagen", "Ahorcado_03.png");
    }else if(errores==4){
        mostrarImagen("ahorcadoImagen", "Ahorcado_04.png");
    }else if(errores==5){
        mostrarImagen("ahorcadoImagen", "Ahorcado_05.png");
    }else if(errores==6){
        mostrarImagen("ahorcadoImagen", "Ahorcado_06.png");
    }else if(errores==7){
        mostrarImagen("ahorcadoImagen", "Ahorcado_07.png");
    }else if(errores==8){
        mostrarImagen("ahorcadoImagen", "Ahorcado_08.png");
    }else if(errores==9){
        mostrarImagen("ahorcadoImagen", "Ahorcado_09.png");
    }
}