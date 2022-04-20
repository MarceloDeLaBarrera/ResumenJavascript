//Funcion constructora (Se usaba antes de ES6)
function Usuario(nombre, edad, correo) {
  this.nombre = nombre;
  this.edad = edad;
  this.correo = correo;

  this.saludar = function () {
    return `Hola, soy ${this.nombre} y mi correo es ${this.correo}`;
  };
}

class Usuario2 {
  constructor(nombre, edad, correo) {
    this.nombre = nombre;
    this.edad = edad;
    this.correo = correo;
  }
  saludar() {
    return `Hola, soy ${this.nombre} y mi correo es ${this.correo}`;
  }
  get getNombre() {
    return this.nombre;
  }
  getEdad() {
    return this.edad;
  }
  get getCorreo() {
    return this.correo;
  }

  setNombre(nuevonombre) {
    this.nombre = nuevonombre;
  }
  set setEdad(nuevaedad) {
    this.edad = nuevaedad;
  }
  setCorreo(nuevocorreo) {
    this.correo = nuevocorreo;
  }
  static metodoEstatico() {
    console.log("Hola hola hola.");
  }
}

//Añadir una propiedad con Prototype.
Usuario2.prototype.pais = "Chile";
let user = new Usuario2("Marcelo", 12, "snaker@hotmail.com");
console.log(Usuario2.prototype.pais); //return Chile.
console.log(user.pais); //return Chile.

//Colocar un metodo fuera de la clase como Prototype: (Funciona solo con funcion constructora.)
Usuario.prototype.saludar = function () {
  return `Hola, soy ${this.nombre} y mi correo es ${this.correo}`;
};

//Instancia de clase, es decir, creacion de objeto + llamada de metodo
const user1 = new Usuario2("Marcelo", 23, "snaker@hotmail.com");
user1.saludar();

//Si se antepone get o set al metodo, se trata como atributo. Ej:
user1.setEdad = 32;
user1.setCorreo("chupachupa.com");
user1.getEdad();
user1.getCorreo;

//Llamando a metodo estatico.
Usuario2.metodoEstatico();

let userr = new Usuario("Marceclo", 24, "snaker232@hotmailc.om");
userr.saludar();

//Herencia
class Profesor extends Usuario2 {
  constructor(nombre, edad, correo, cursosDictados) {
    this.cursosDictados = cursosDictados;
    super(nombre, edad, correo);
  }
}

class Alumno extends Usuario2 {
  constructor(nombre, edad, correo, cursosInscritos) {
    this.cursosInscritos = cursosInscritos;
    super(nombre, edad, correo);
  }
}

//Para exportar clase de otro archivo:
export default class Manuelito {}

//Para importarla en el archivo principal de js donde se quiere usar. Cuando se hace esta importacion, en el html el script type sera de tipo "module"
import Manuelito from "./Practicando JavaScript/Mathh/random.js";
