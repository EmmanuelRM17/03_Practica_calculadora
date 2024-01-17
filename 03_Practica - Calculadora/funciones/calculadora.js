// Obtener el elemento de la pantalla
var pantalla = document.getElementById("pantalla");

// Obtener botones por su ID
var botonSuma = document.getElementById("botonSuma");
var botonResta = document.getElementById("botonResta");
var botonMultiplicar = document.getElementById("botonMultiplicar");
var botonDivision = document.getElementById("botonDivision");
var botonCuadrado = document.getElementById("botonCuadrado"); // Botón de elevar al cuadrado
var botonIgual = document.getElementById("botonIgual");
var botonLimpiar = document.getElementById("botonEliminar");

// Obtener botones numéricos
var botonesNumeros = document.getElementsByClassName("btn");
// Obtener botones de operación
var botonesOperacion = [botonSuma, botonResta, botonMultiplicar, botonDivision, botonCuadrado];

// Variables para almacenar los valores de los operandos y el operador
var operando1 = 0;
var operando2 = null;
var operador = null;

// Actualizar la pantalla
const actualizarPantalla = (valor) => {
    if (pantalla.textContent === "0" || operador !== null && operando2 === null) {
        pantalla.textContent = valor;
    } else {
        pantalla.textContent += valor;
    }
};

// Establecer operador y el primer operando
const establecerOperador = (op) => {
    if (operador === null) {
        operando1 = parseFloat(pantalla.textContent);
    } else {
        operando2 = parseFloat(pantalla.textContent);
    }
    operador = op;
    operando2 = null;
};

// Asignar eventos onclick a los botones numéricos
for (let boton of botonesNumeros) {
    boton.onclick = () => actualizarPantalla(boton.textContent);
}

// Asignar eventos onclick a los botones de operación
for (let boton of botonesOperacion) {
    boton.onclick = () => establecerOperador(boton.textContent);
}


// Botón cuadrado (^)
botonCuadrado.onclick = () => {
    operando1 = parseFloat(pantalla.textContent);
    operador = '^';
};

// Botón igual
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
            // ... incluir casos para otros operadores
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


// Botón limpiar
botonLimpiar.onclick = () => {
    pantalla.textContent = "0";
    operando1 = 0;
    operando2 = null;
    operador = null;
};
var botonBorrar = document.getElementById("botonBorrar");

// Asignar evento onclick al botón borrar
botonBorrar.onclick = () => {
    var textoActual = pantalla.textContent;
    if (textoActual.length > 1) {
        // Eliminar el último carácter
        pantalla.textContent = textoActual.substring(0, textoActual.length - 1);
    } else {
        // Si solo queda un carácter, establecer la pantalla a '0'
        pantalla.textContent = '0';
    }
};