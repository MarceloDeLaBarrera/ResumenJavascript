//Funcion con parametro rest, es decir, los 3 puntos: '...' Se refiere a que pueden venir o no venir muchos parametros a partir de dicho parametro.

function sumar(a, b, ...c) {
  let resultado = a + b;
  c.forEach((num) => (resultado += num));
  return resultado;
}

console.log(sumar(1, 2, 5, 10, 50)); //return 68

const OBJETO1 = {
  pepe: "papa",
  num: 123,
};
const OBJETO2 = {
  pds: "papa",
  numm: 1234,
};

//Unir dos objetos con operador spread/rest (los 3 puntos).
//Si se repite una de las claves en alguno de los objetos, remplazara el valor con el del segundo.
const RESULTADO2 = { ...OBJETO1, ...OBJETO2 };

//Unir dos arrays con operador spread. (Los 3 puntitos.)
let a1 = ["papa", "pepe"];
let a2 = ["pipi", "popo"];
const A4 = [...a1, ...a2];

//Meter objetos dentro de un array con spread.

const CARRITO = [];

const PRODUCTO = {
  nombre: "Tele",
  precio: 234,
};
const PRODUCTO2 = {
  nombre: "Jamon",
  precio: 24,
};
const PRODUCTO3 = {
  nombre: "Compu",
  precio: 54356,
};

const CARRITO_LLENO = [...CARRITO, PRODUCTO, PRODUCTO2, PRODUCTO3]; //Metiendo los objetos dentro de lista carrito.
const CARRITO_LLENO2 = [PRODUCTO, ...CARRITO_LLENO]; //Metiendo producto al tope de la lista.
