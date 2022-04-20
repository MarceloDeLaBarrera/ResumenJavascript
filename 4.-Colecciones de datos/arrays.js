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
const meses = [44, 55, 66, 54, 32];

const cart = [
  { nombre: "pepe", precio: 300 },
  { nombre: "ds", precio: 3232 },
  { nombre: "dasasd", precio: 2321 },
  { nombre: "fd", precio: 3243 },
  { nombre: "pepddssdde", precio: 300 },
];

//Sin filter
numeros.map((num) => {
  if (num > 20) {
    numerosFiltrados.push(num);
  }
});

//Con filter
let numeros_filtrados = numeros.filter((num) => num > 20);

//Ver que elementos cuestan 300 con .filter
const indice2= cart.filter((producto)=> producto.precio===300);
console.log("")

//Para array de variables, tradicional
let resultado = meses.includes(44); //return true or false si esta en el array

//Para array de objetos o tradicional. Some sirve para ver si se encuentra algun elemento dentro del array
let existe = cart.some((producto)=> producto.nombre === "pepe" //return true or false con .some si se encuentra dentro.
)
console.log(existe) 

let existe2= meses.some((mes)=> mes===55)

//Every sirve para ver que se cumpla la condicion en todos los elementos del array.
let secumple = cart.every(producto => producto.precio>500) // retorna false. Si fuera desde 300 si aplicaria true.


//Acumular con foreach.

let total =0;
cart.forEach((producto)=> total+= producto.precio)
console.log(total)


//Acumular con reduce. Se le pasan el parametro donde se acumulará y los valores a acumular. El tercer parametro seria el valor inicial de total.
//
let resultado2= cart.reduce((montoTotal,producto)=> montoTotal+ producto.precio, 0)


//.find para encontrar elemento.
let resultado3= cart.find((producto)=> producto.nombre==="pepe" )
//Retorna el objeto entero, el primer elemento que encuentre.


//Para ver en que indice.
const indice = meses.findIndex((mes)=> mes === 66 );
console.log(indice) //almacena en indice el indice si es que existe, si no, almacena un -1

if(indice>0){
    console.log("Elemento existe")
}else{
    console.log("No existe")
}


//Spread de meses. Es temporal no modifica el arreglo original y agrega elemento al final.
const meses2= [...meses, "agosto"];



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
