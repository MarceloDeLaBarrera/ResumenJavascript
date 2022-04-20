//Valor de iniciacion, condicion de ciclo hasta que deje de ser verdadera, incrementador.
for (let i = 0; i < 10; i++) {}

let texto = "Mi mama me mima";

//Recorre cadena de texto y accede a cada letra.
for (let i = 0; i < texto.length; i++) {
  console.log(texto[i]);
}

//Recorrer ciclo de forma similar a python. Aplica para arrays y strings. Tambien para recorrer elementos del dom.
for (let letras of texto) {
  console.log(letras);
}

links = document.links;

for (let link of links) {
  link.style.color = "red"; //Cambia el color de todos los links a rojo, al setear con style.color en red.
}

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

//Recorrer objetos con ciclo for
for (let propiedad in gato) {
  console.log(propiedad); //key
  console.log(gato[propiedad]); //value... No funciona el "." ... Solo funciona con corchetes.
}
