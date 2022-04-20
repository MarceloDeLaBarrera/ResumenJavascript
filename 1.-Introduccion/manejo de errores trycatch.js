//Manejo de errores con try catch

try {
  console.log("Entrando al try...");
  noExiste;
  console.log("Codigo que se pierde por el error generado en linea anterior.");
} catch (error) {
  console.log(`El error es: ${error}`);
} finally {
  console.log("Codigo que se ejecuta siempre, haya o no haya error.");
}

//Generando error personalizado.

try {
  console.log("Entrando al try...");
  //let numero = "fsdfsd";
  let numero = 8;
  if (isNaN(numero)) {
    throw new Error("Se esperaba un numero en lugar de un caracter.");
  }
  console.log(
    `Codigo que se ejecuta solo cuando no hay error. La multiplicacion es: ${
      numero * numero
    }`
  );
} catch (error) {
  console.log(`${error}`);
}
