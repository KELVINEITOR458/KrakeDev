//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
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