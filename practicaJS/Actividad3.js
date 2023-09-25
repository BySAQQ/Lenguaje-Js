function calcularMedia(arrayNumbers) {
    let suma = 0;
    for (let i = 0; i < arrayNumbers.length; i++) {
        suma += arrayNumbers[i];
    }
    return suma / arrayNumbers.length;
}

function invertirCadena(string) {
    return string.split("").reverse().join("");
}

function palindromo(string) { 
    let stringInvertido = invertirCadena(string);
    return stringInvertido === string;
}

console.log(calcularMedia([1, 2, 3, 4, 5]));
console.log(invertirCadena("Hola"));
console.log(palindromo("ana"));