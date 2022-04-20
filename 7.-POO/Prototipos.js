//Un prototipo es un mecanismo por el cual un objeto va a poder heredar de un objeto padre, atributos o metodos.

//Añadir prototipos a los objetos/clases de tipos de datos.

//Ej:

Number.prototype.esPositivo = function () {
  if (this > 0) {
    return true;
  } else {
    return false;
  }
};

//Es una buena practica añadir los metodos fuera de la clase, por medio de prototipos.
