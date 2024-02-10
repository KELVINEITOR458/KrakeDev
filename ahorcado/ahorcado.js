//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;


esMayuscula = function(caracter){
    let cmpCaracter;
    let charCaracter;
    cmpCaracter = document.getElementById("txtSecreta");
    charCaracter = cmpCaracter.charAt(0);
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

