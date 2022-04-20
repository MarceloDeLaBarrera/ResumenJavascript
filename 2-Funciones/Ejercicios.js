//Funcion que retorne largo de una cadena.

const CONTARCARACTERES = (cadena = "") =>
  !cadena
    ? console.warn("No ingreso cadena.")
    : console.log(`El largo de la cadena es ${cadena.length} `);

CONTARCARACTERES("Hola Mundo");

const CADENATOARRAY = (cadena = "", separador = undefined) =>
  !cadena
    ? console.warn("No ingreso cadena.")
    : separador === undefined
    ? console.warn("No ingresaste el caracter separador")
    : console.log(cadena.split(separador));

//Funcion que invierte cadena.
const INVERTIRCADENA = (cadena = "") =>
  !cadena
    ? console.warn("No ingreso cadena.")
    : cadena.split("").reverse.join("");

//Funcion que retorna cuantas veces se repite una palabra en una cadena.
const textoEnCadenaRepetido = (cadena = "", texto = "") => {
  if (!cadena) {
    console.log("No ingresaste texto largo.");
  }
  if (!texto) {
    console.log("No ingresaste texto a buscar");
  }

  let repeticiones = cadena
    .trim()
    .toLowerCase()
    .replace(",", "")
    .replace(".", "")
    .split(" ")
    .filter((text) => text === texto.toLowerCase()).length;
  console.log(`${texto} se repite ${repeticiones}`);
};

//Funcion que devuelta otro array con los numeros elevados al cuadrado.

const elevarAlCuadrado = (array = undefined) => {
  const newArray = array.map((element) => element * element);
  console.log(newArray);
};

//Funcion que a partir de un array de numeros devuelva un objeto que separa dicho array en un array de pares y otro array de impares.

const separadorParesImpares = (array = undefined) =>
  console.log({
    pares: array.filter((num) => num % 2 === 0),
    impares: array.filter((num) => num % 2 === 1),
  });

//Funcion que dado un arreglo de numeros, devuelva el promedio.

const promedio = (array = undefined) =>
  console.log(array.reduce((prom, num) => prom + num) / array.length);

/*

  
     
  */
