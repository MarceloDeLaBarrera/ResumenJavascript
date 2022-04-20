//Para exportar constante de un archivo js:
export const PI = Math.PI;

//Para exportar una funcion de un archivo js:
export function sumar(a, b) {
  return a + b;
}

//Exportar con default variables o constantes.
//Default significa que cuando se haga la importacion en el otro archivo, carga ese objeto o funcion por defecto.
//A diferencia del export normal, que cuando se haga la importancion en el otro archivo, los carga solamente al momento de ser utilizados.
const perrito = "perrito";
export default perrito;

//Para importar lo declarado en el otro archivo js.

//NOTA: ./ se usa si estan en la misma carpeta ambos archivos. Si estan en diferente se añade un punto por cada subnivel que se quiera subir, o se le puede dar la ruta entera solo con "" ./ "".

import { PI } from "./Practicando JavaScript/1.- Introduccion/constantes.js";

//Importar con alias con " as ":---> import {PI as pi} from ...blablabla

//Cuando se importa una variable o funcion default junto a otra comun esta seria la estructura:

import React, { Components } from "react"; //En este caso React es la funcion default y components otra funcion normal a utilizar.

//NOTA : Al usar modulos, el type al declarar el script en el html, debe ser type="module" Ej:
<script src="js/modulos.js" type="module"></script>;
