var pantalla = document.getElementById("pantalla");
var botonSuma = document.getElementById("botonSuma");
var botonResta = document.getElementById("botonResta");
var botonMultiplicar = document.getElementById("botonMultiplicar");
var botonDivision = document.getElementById("botonDivision");
var botonCuadrado = document.getElementById("botonCuadrado"); 
var botonIgual = document.getElementById("botonIgual");
var botonLimpiar = document.getElementById("botonEliminar");

var botonesNumeros = document.getElementsByClassName("btn");
var botonesOperacion = [botonSuma, botonResta, botonMultiplicar, botonDivision, botonCuadrado];

var operando1 = 0;
var operando2 = null;
var operador = null;

const actualizarPantalla = (valor) => {
    if (pantalla.textContent === "0" || operador !== null && operando2 === null) {
        pantalla.textContent = valor;
    } else {
        pantalla.textContent += valor;
    }
};

const establecerOperador = (op) => {
    if (operador === null) {
        operando1 = parseFloat(pantalla.textContent);
    } else {
        operando2 = parseFloat(pantalla.textContent);
    }
    operador = op;
    operando2 = null;
};

for (let boton of botonesNumeros) {
    boton.onclick = () => actualizarPantalla(boton.textContent);
}

for (let boton of botonesOperacion) {
    boton.onclick = () => establecerOperador(boton.textContent);
}


botonCuadrado.onclick = () => {
    operando1 = parseFloat(pantalla.textContent);
    operador = '^';
};

botonIgual.onclick = () => {
    operando2 = parseFloat(pantalla.textContent);
    var resultado = 0;
    try {
        switch(operador) {
            case '+': resultado = operando1 + operando2; break;
            case '-': resultado = operando1 - operando2; break;
            case '*': resultado = operando1 * operando2; break;
            case '/':
                if (operando2 === 0) {
                    throw "Error: División por cero";
                }
                resultado = operando1 / operando2;
                break;
            case '^': resultado = Math.pow(operando1, operando2); break;
            default: return;
        }
        pantalla.textContent = resultado;
        operando1 = resultado;
        operador = null;
        operando2 = null;
    } catch (error) {
        pantalla.textContent = error;
        operando1 = 0;
        operador = null;
        operando2 = null;
    }
};
botonLimpiar.onclick = () => {
    pantalla.textContent = "0";
    operando1 = 0;
    operando2 = null;
    operador = null;
};
var botonBorrar = document.getElementById("botonBorrar");

botonBorrar.onclick = () => {
    var textoActual = pantalla.textContent;
    if (textoActual.length > 1) {
        pantalla.textContent = textoActual.substring(0, textoActual.length - 1);
    } else {
        pantalla.textContent = '0';
    }
};
