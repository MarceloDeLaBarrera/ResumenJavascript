let amigos = ["Pedro", "Juan", "Diego"];

//Agregar elementos al array
amigos.push("Diego");
amigos[3] = "Ramoncin";

//Agregar elemento al inicio del array
amigos.unshift("Marcelo");

//Quitar ultimo elemento
amigos.pop();
let amigo_eleminado = amigos.pop(); //almacena el elemento eliminado en variable. Aplica para shift tambien.

//Quitar primer elemento.
amigos.shift();

//Partir array desde una posicion a otra posicion.
amigos_partido = amigos.slice(0, 2); //Pedro y Juan 0 y 1.... o dicho de otra forma, pasa como parametro posicion de elemento a eliminar, y elimina la cantidad de elementos que se le indiquen en el segundo parametro que esten posterior a el, pero contandolo. Por ej, 0,1 elimina solo 1. 0,2 elimina 2. y asi sucesvimente

//Unir dos arrays con concat.
let a1 = ["papa", "pepe"];
let a2 = ["pipi", "popo"];
let a3 = a1.concat(a2);

//Unir dos arrays con operador spread. (Los 3 puntitos.)
const A4 = [...a1, ...a2];

//Ordenar elementos
amigos.sort();
amigos.reverse();

//Unir elementos de array en string.
amigos.join("-");

//Metodo foreach con funcion normal
amigos.forEach(function (amigo) {
  console.log(amigo);
});

//Metodo map con funcion normal
let arrayNuevo = amigos.map(function (amigo) {
  return `Hola ${amigo}`;
});

//Metodo foreach con arrow function.
amigos.forEach((amigo) => console.log(amigo));

//Metodo foreach permite pintar el index o todo el array pasandolos como parametros.
amigos.forEach((amigo, index) => console.log(`${index}: ${amigo}`));

//Metodo .map... Permite generar un nuevo array con lo retornado en cada vuelta del ciclo.
let nuevoArray = amigos.map((amigo) => `Hola ${amigo}`);

//Metodo filter. Permite filtrar contenido

let numeros = [10, 436, 45, 74, 33, 9, 2, 54];
let numerosFiltrados = [];

//Sin filter
numeros.map((num) => {
  if (num > 20) {
    numerosFiltrados.push(num);
  }
});

//Con filter
let numeros_filtrados = numeros.filter((num) => num > 20);

//Recorrer Array de un array

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

//Recorrer array de objetos.

const carrito = [
  {
    nombre: "Tele",
    precio: 234,
  },
  {
    nombre: "Jamon",
    precio: 24,
  },
  {
    nombre: "Compu",
    precio: 54356,
  },
  {
    nombre: "blabla",
    precio: 2312,
  },
  {
    nombre: "pene",
    precio: 453,
  },
  {
    nombre: "raton",
    precio: 25,
  },
];

for (let i = 0; i < carrito.length; i++) {
  console.log(`Item ${i + 1}`);
  console.log(`Nombre: ${carrito[i].nombre} `);
  console.log(`Precio: ${carrito[i].precio} `);
  console.log(" ");
}

carrito.forEach((item, index) =>
  console.log(
    `Item ${index + 1} \nNombre: ${item.nombre} \nPrecio: ${item.precio}\n\n`
  )
);

//Destructuracion:
const NUMS = [1, 2, 3];
let [one, two, three] = NUMS; //Se separa los 3 elementos del arreglo en 3 variables.
let [, , tres] = NUMS; // Desconstruyendo solamente el 3er valor.
let [uno, ...others] = NUMS; // Desconstruyendo colocando separando un elemento en una variable, y todos los otros elementos dentro de otra variable tipo array.
