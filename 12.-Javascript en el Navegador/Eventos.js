//Cualquier cosa que ocurre en la pagina.

//Escuchador de eventos.
const title = document.getElementById("title");

//El primer parametro es el evento. El segundo parametro es una funcion. El eventHandler
title.addEventListener("click", (e) => {
  alert("Hola mundo");

  //Esto retorna el elemento donde se hizo click.
  e.target;
  //Para acceder al texto:
  e.target.textContent;
});

//Eventos de Mouse.
