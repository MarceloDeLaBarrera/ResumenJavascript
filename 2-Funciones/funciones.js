//Declaracion basica de una funcion

function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

//Llamada de la funcion
saludar("Marcelo");

//Retornando valores por funcion.
function getNombreCompleto(nombre, apellido) {
  let nombreCompleto = `${nombre} ${apellido}`;

  return nombreCompleto;
}

console.log(getNombreCompleto("Marcelo", "De La Barrera"));

//Funciones de primera clase

//Cambiaandole nombre a una funcion:
let nombre_completo = getNombreCompleto;
nombre_completo("Marcelo", "De La Barrera");

//Puedo guardar lo que retorna una funcion en una variable ej:
let nombre = getNombreCompleto("Marcelo", "De La Barrera");

//Funcion anonima ==> que va sin nombre.

(function (p) {
  return console.log(p);
})("perrito");

(function (d, w, c) {
  console.log(d);
  console.log(w);
  console.log(c);
})(document, window, console);

//Las funciones expresadas como constantes o variables no puededn ser llamadas antes de haber sido dedclaradas, puesto que la variable seria undefined.
//En cambio, una funcion declarada de forma normal, puede ser llamada en cualquier parte del documento ya que javascript hace un barrido del documento entero, por lo que una funcion declarada puede ser llamada antes de haber sido declarada.
//El barrido del documento que hace JS, antes de ejecutar, se conoce como hoisting.

//Funcion expresada como una constante.

const MIFUNCION = function (nombre) {
  console.log(`Hola ${nombre}`);
};

MIFUNCION("Juan");

//Funcion expresada como constante con declaracion tipo flecha.
const saludar = (nombre) => `Hola ${nombre}`;
saludar("Marcelo");

//Funcion expresada como constante con declaracion tipo flecha returnando objeto literal.
const getUser = ()=> ({
  uid: "abc12",
  username: "elsdsada"
});



//Funcion como constante con declaracion tipo flecha, con parametros con valores predefinidos. Tambien se pueden colocar valores predefinidos en los otros tipos de funciones.
const azarFlecha = (min = 1, max = 100) =>
  Math.floor(Math.random() * (max - min)) + min;

//Para omitir primer valor, se le puede poner null o undefined. Para omitir el segundo basta con pasar un solo parametro.
console.log(azarFlecha(undefined, 50));

//Retornando valores con funciones.

let total = 0;
function agregarCarrito(precio) {
  return (total += precio);
}
agregarCarrito(100);
agregarCarrito(200);

//Funcion con parametro rest, es decir, los 3 puntos: '...' Se refiere a que pueden venir o no venir muchos parametros a partir de dicho parametro.

function sumar(a, b, ...c) {
  let resultado = a + b;
  c.forEach((num) => (resultado += num));
  return resultado;
}

//Arguments, se refiere a los argumentos de la funcion, los parametros.

const myFunction = function (a, b, c, d) {
  if (arguments.length != 4) {
    console.error("La funcion debe tener 4 parametros.");
    return;
  }
  return a + b + c + d;
};
