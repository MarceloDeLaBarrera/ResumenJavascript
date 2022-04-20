// Foreach ==> para cada.

let amigos = ["Pedro", "Juan", "Diego"];

//Foreach necesita para funcionar como parametro una funcion. Esta funcion interna, necesita como parametro el como se nombrará a cada uno de los elementos del arreglo.
amigos.forEach(function (amigo) {
  console.log(amigo);
});

//Con funcion tipo flecha seria:
amigos.forEach((amigo) => console.log(amigo));
