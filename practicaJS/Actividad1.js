var a = 1;
let b = 2;
const c = 3;

function test() {
    var a = 4;
    let b = 5;
    const c = 6; 
    console.log('Dentro de la Funcion: ',  a, b, c);
}
test();
console.log('Fuera de la Funcion: ',  a, b, c);
 