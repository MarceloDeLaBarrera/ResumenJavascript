const alumno = {
  nombre: "Beto",
  edad: 21,
  suscriptor: false,
  ciudad: "Lima",
};

//Formas de acceder a los elementos del objeto/diccionario.
alumno.nombre;
alumno["nombre"];

//Crear nueva clave/valor en objeto.
alumno.email = "pepepe@hotmail.com";

//Update clave
alumno.nombre = "Juan";

//Delete clave.
delete alumno.email;

//Generar array con los valores.
valores = Object.values(alumno);

//Generar array con claves.
claves = Object.keys(alumno);

//Genera un array que contiene arrays de 2 elementos, con las clave/valor.
claveValor = Object.entries(alumno);

//Acceder a los elementos de un objeto.
//Arrow function no tiene this o super y no se debe usar como metodo, ya que hacen que el "this" no se refiera al contexto del objeto si no al contexto general, es decir, el window.
const gato = {
  nombre: "valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],
  comer(alimento) {
    console.log(`${this.nombre} esta comiendo ${alimento}.`);
  },
  listarEnemigos() {
    this.enemigos.forEach((enemigo) => console.log(enemigo));
  },
  maullar: function () {
    console.log("Miau miau");
  },
  rasguñar: () => {
    console.log("Miau miau");
  },
  get nombreMayus() {
    return this.nombre.toUpperCase();
  },
  set nuevoEnemigo(enemigo) {
    this.enemigos.push(enemigo);
  },
  otros: {
    amigos: ["cobarde", "timido"],
    favoritos: {
      comida: {
        frio: "salom",
        caliente: "pollito",
      },
    },
  },
};

gato.otros.amigos[0]; //cobarde
gato.otros.favoritos.comida.caliente; //pollito
gato.nuevoEnemigo = "Batman"; //Para añadir valor al set.
gato["nuevoEnemigo"] = "Robinzon"; //Para añadir valor al set igualmente.

//Recorrer objetos con ciclo for
for (let propiedad in gato) {
  console.log(propiedad); //key
  console.log(gato[propiedad]); //value... No funciona el "." ... Solo funciona con corchetes.
}

//Otra forma de recorrer objetos con ciclo for, similar a python.
for (let [clave, valor] of Object.entries(gato)) {
  console.log(`${clave} : ${valor}`);
}

//Almacenar contenido de un objeto en una lista con cada clave:valor en forma de listas.
let emptyarray = [];
for (let clavevalor of Object.entries(gato)) {
  emptyarray.push(clavevalor);
}

//Recorrer un array dentro de un objeto.
gato.enemigos.forEach((enemigo) => console.log(enemigo));

//Destructuracion:

const PERSONA = {
  nombre: "Jon",
  apellido: "Mircha",
  edad: 24,
};

//Para destructurar, las variables a crear deben tener el mismo nombre que las propiedades del objeto del cual provienen.
//Puede ser en diferente orden...
{
  let { nombre, apellido, edad } = PERSONA;
  console.log(nombre, apellido, edad);
}

//Asignar otro nombre a una variable destructurada.

const {nombre:nombre2} = PERSONA;

//Destructuracion en parametros de una funcion.
const retornaPersona = ({nombre,apellido, rango= "heroe"}) => {
  console.log(nombre,apellido, rango)
}
retornaPersona(PERSONA)

//Destructuracion de objetos anidados:

const PERRO = {
  nombre: "perrito",
  apellido: "juanito",
  actitudes: {
    ladrar: {
      enojado: "si",
      tranquilo: "no",
    },
    maullar: "no",
  },
};

let {nombre, actitudes: { ladrar },} = PERRO;

console.log(nombre, ladrar); //Actitudes no existiria como variable, para ello, habria que agregarlo en la destrucctacion por si solo.

//Hacer que un objeto no sea modificable con freeze:
Object.freeze(PERRO);

// Seal bloquea agregar o eliminar propiedades pero si permite modificar existentes.
Object.seal(PERRO);

//Unir dos objetos con assign.

const OBJETO1 = {
  pepe: "papa",
  num: 123,
};
const OBJETO2 = {
  pds: "papa",
  numm: 1234,
};

//Si se repite una de las claves en alguno de los objetos, remplazara el valor con el del segundo.
const RESULTADO = Object.assign(OBJETO1, OBJETO2);

//Unir dos objetos con operador spread/rest (los 3 puntos).
const RESULTADO2 = { ...OBJETO1, ...OBJETO2 };
