//Mientras se cumpla una condición x, hacer lo de las llaves.

let juguetes = 10;

while (juguetes > 0) {
  juguetes--;
  console.log(`Regalamos un juguete. Nos quedan ${juguetes} juguetes. `);
}
//Nos quedan 9, 8,7,6,5,4,3,2,1,0.

let contador = 0;
do {
  contador++;
  console.log(contador);
} while (contador < 10);
