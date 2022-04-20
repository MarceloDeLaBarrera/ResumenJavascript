//Se obtiene el elemento o nodo (la etiqueta entera y su contenido) por la id.
const title = document.getElementById("title");

//Seleccionar elemento por nombre de etiqueta.
document.getElementsByTagName("h3");

//Con style se accede a las propiedades de CSS. Em este caso se le pone fondo amarillo a la etiqueta.
title.style.background = "yellow";

//query selector obtiene el primer elemento que coincida con el parametro.
//puede acceder por id al selector css anteponiendo un '#'.
//Tambien se puede acceder a la clase anteponiendo un punto.
//Tambien se puede usar como selector la etiqueta.
document.querySelector("#title");
document.querySelector(".text-primary");
document.querySelector("h1");

//Si se quiere seleccionar mas de una coincidencia, se utilza queryselectorall
document.querySelectorAll("h1");

//Seleccionar algo que esta dentro de algo , tal cual como en css.
document.querySelector(" .container .text-danger ");

//query selector puede acceder a elementos no necesariamente desde document.
title.querySelector("li:last-child");

//Queryselector devuelve un Nodelist, no un array. Se puede convertir en array asi:
const nodeList = Array.from(document.querySelector("li"));

nodeList.map((el) => {
  if (el.textContet.trim().toUpperCase() === "SOME") {
    el.remove();
  }
});

//Si no se quiere convertir en array, tambien se puede recorrer con ciclo "for of"
