/* function nombreFuncion(parametro1, parametro2) {
    // Bloque de código
    // que realiza operaciones
    // con los parámetros
    return resultado;
    }
 
    function: Palabra clave que indica la declaración de una función.
    nombreFuncion: Nombre de la función, que puede ser elegido por el
    programador.

    (parametro1, parametro2): Parámetros que se utilizan para pasar datos
    a la función. Pueden ser opcionales.
    
    return: Palabra clave que especifica el valor que la función devuelve al
    ser invocada.
    */

    function calcularAreaCirculo(radio) {
        var area = Math.PI * radio * radio;
        return area;
        }
        var radioCirculo = 5;
        var areaCirculo =  calcularAreaCirculo(radioCirculo);

        console.log("El área del círculo es: " + areaCirculo);
        
    Button.onClick = calcularAreaCirculo (radioCirculo);

    // DOM Document Object Model

    function sumar(num1, num2) {
       console.log(num1 + num2);
    }
    sumar(15,20);


    let friends = [ "Andres", "Pino", "Erick" ];

    let bookObject = {
        title : "Book",
        authors : friends,
        numPages : 10
    }; 
