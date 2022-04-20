//Operadores aritmeticos

// +, -, *, /... %, **, --> residuo, elevado, igual que en python.

a = 10;
b = 4;
a += b; // ahora 'a' vale 14.

//Operadores de Concatenación.

let nombre = "Pedro";
let apellido = "Quiroga";
let nombre_completo = nombre + " " + apellido;

//Otra forma de concatenar seria Template String. (Similar al F string de Python)

let nickname = `Mi nombre es: ${nombre} y mi apellido es ${apellido} y tengo ${
  50 + 20
} dolares lo cual es ${20 < 10}`;
// return 'Mi nombre es: Pedro y mi apellido es Quiroga y tengo 70 dolares lo cual es false'

//Operadores de comparacion
// <, >, <=, >=
// == --> Es igual a (Compara solo el valor)
// === --> Es estrictamente igual (Compara el valor y tipo de dato.)
// !=  --> Es distinto
// !== --> Es estrictamente diferente

// En JS 50 == "50" --> True.
// Pero 50 === "50" --> False

let resultado = a == b; // almacena true o false segun si a sea igual o no a 'b'.

//Operadores logicos.
// and= && . or= ||  .  negacion= !

//Operadores ternarios

let num1 = 5;
let num2 = 3;
let c = num1 < num2 ? "Es verdad" : "Es Falso"; //Es num1 menor que num 2 ?--> Si es verdad, : --> si no...

autenticado = true;
puedePagar = false;

//Ternario anidado, como si fuera if dentro de if.
let check = autenticado
  ? puedePagar
    ? "Si esta autenticado y puede "
    : "Si autenticado, no puede pagar"
  : "No no esta autenticado";

//OPERADOR DE CORTO CIRCUITO.

//Cortocircuito OR --> Cuando el valor de la izquierda sea TRUE, cargara dicho valor. Si es False, cargara el de la derecha.

//Cortocircuito AND --> Cuando el valor de la izquierda sea False, cargara dicho valor. Si es true, cargara al de la derecha. Es decir es lo contrario de OR.

function saludar(nombre) {
  nombre = nombre || "Desconocido";
  console.log(`Hola ${nombre}`);
}

function saludar(nombre) {
  nombre = nombre && "Desconocido";
  console.log(`Hola ${nombre}`);
}

//Type Coercion
