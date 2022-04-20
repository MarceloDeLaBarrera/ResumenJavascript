//Para escribir
document.write("Hola");

//Para leer
let variable = prompt("Ingrese un numero");

stringgg = "culiado";
edad = 34;

//template String
console.log(`Hola chupala weon ${stringgg} y tengo ${edad} años`);

//Uso de %s y %d para formatear string ==> s= string   d= digitos
console.log(`Hola chupala weon %s y tengo %d años`, stringgg, edad);

//Para limpiar
console.clear();

//Muestra en consola documento html
console.log(document);

//Muestra en consola todos los elementos que componen al objeto document.
console.dir(document);

//Para agrupar varios console en un consolegroup. Se finaliza con groupend.
console.group("blablabla");
console.log("blabla");
console.log("blabla");
console.groupEnd();

//Para ver cuanto tiempo tarda en ejectuarse una fraccion de codigo.

console.time("Alias del time");
for (i = 0; i < 10; i++) {}
console.timeEnd("Alias del time");

//Count permite llevar un contador. Util para llevar un conteo dentro de ciclo
for (i = 0; i < 10; i++) {
  console.count("Se ejectuto: ");
}

//Para hacer pruebas con assert en consola.
let x = 3,
  y = 2,
  pruebaXY = "Se espera que X siempre sea menor que Y";
console.assert(x < y, { x, y, pruebaXY });
