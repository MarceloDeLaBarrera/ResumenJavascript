//Comentario de una linea.
/* Comentario 
multilinea */

//TIPOS DE DATOS.

//Enteros y decimales, todo tipo de numero, son de tipo number. No existe float ni int.
console.log(typeof 50); //return "number"
console.log(typeof 50.6); //return "number"
let num = 123;
let num2 = new Number(1234);

// String - Cadenas de texto. No existe char.
console.log(typeof "a"); // return "string"
console.log(typeof "papa papa"); // return "string"
let nombre = "Jon";
let apellido = new String("wazosky");

//Boolean. True or False.
console.log(typeof true); //return boolean.

//Objetos: Colecciones de datos que tienen un identificador y un valor. (Como los diccionarios en python)

var obj = { nombre: "beto", apellido: "Quiroga" }[
  //Coleccion de datos. Arrays/Arreglo.
  (1, 2, 3, 4, 5)
];

//Los arreglos cuentan como un tipo de objeto ya que cada valor dentro del array tiene un identificador de posicion al cual le corresponde un valor. Ej:

var array = ["pepe", "ramon", "jose"];
/**
 * 0: "pepe"
 * 1: "ramon"
 * 2: "jose"
 * length: 3.
 **/

//Tipos de datos mas usados en validaciones. Ej: if(num != null || num != undefined... etc )

//Nulo null, que la variable esta vacia o incorrecta.
var numero = null;

//El tipo de dato null es un objeto pese a no cumplir con el concepto de clave/valor.
console.log(typeof null); //return object

//Undefined, no definido.
let perrito;
console.log(typeof undefined); //return undefined

//NaN (not a number).. Cuando se realizan operaciones matematicas con un string.
var texto2 = "Hola";
document.write(texto2 * 2);
