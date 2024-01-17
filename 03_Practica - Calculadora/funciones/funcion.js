// Declaración de la función suma utilizando una función flecha y asignándola a una variable
const suma = (v1, v2) => {
    return v1 + v2;
};

// Uso de la función suma
const num1 = 1;
const num2 = 3;
console.log(suma(num1, num2)); // Esto imprimirá 4 en la consola

// Función flecha para calcular el cuadrado de un número
const cuadrado = x => x * x;
console.log(cuadrado(5)); // Esto imprimirá 25 en la consola

// Otra forma de escribir la función cuadrado
const cuadrado2 = (x) => x * x;
console.log(cuadrado2(5)); // Esto también imprimirá 25

// Y otra forma más, usando llaves y return explícito
const cuadrado3 = (x) => {
    return x * x;
};
console.log(cuadrado3(5)); // Esto también imprimirá 25

// Función que recibe otra función como argumento y la ejecuta
const fun = (funcion) => {
    funcion();
};

// Llamando a fun con una función flecha que imprime "hola" en la consola
fun(() => {
    console.log("hola");
}); // Esto imprimirá "hola" en la consola
