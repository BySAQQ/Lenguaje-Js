// Bucle Basico

for (let i = 0; i < 11; i++) {
    const element = array[i];
    return i;
}

console.log(i);

// Sumatoria con bucle

for (let index = 0; index <= 100; index++) {
    element += index;
    return element;
}
console.log(element);

//Bucle dentro de bucle

for (let index = 0; index < 10; index++) {
    for (let j = 0; j < 10; j++) {
        const mult = index * j;
        console.log (`{index} x {j}` = mult);
    }
}

//Bucle con condicionales

for (let index = 1; index <= 20; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
        console.log("FizzBuzz");
    } else if (index % 3 === 0) {
        console.log("Fizz");
    } else if (index % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(index);
    }
}

// Bucle While
while (index < 100) {
    console.log(index);
    index/2;
}
