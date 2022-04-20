//if, else if, else.
// switch case.
//break y continue NO SE PUEDE USAR en FOREACH, solo se pueden usar en estructuras de control como for, while, if switch/case.

if (10 > 2) {
  console.log("Pepe");
}

let personalidad = "pequeño";

//Evalua valor de personalidad en cada caso y corta cuando encuentra.
switch (personalidad) {
  case "fuerte":
    console.log("Eres goku");
    break;
  case "pequeño":
    console.log("Eres Krillin");
    break;
  case "verde":
    console.log("Eres Piccolo");
    break;
  case "rosa":
    console.log("Eres Majin Bu");
    break;
  default:
    console.log("Eres una sabandija");
}

//continue y break

const NUMEROS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < NUMEROS.length; i++) {
  if (i == 8) {
    break;
  }
  if (NUMEROS[i] % 2 == 0) {
    continue;
  }
  console.log(NUMEROS[i]);
}
