const title = document.getElementById("title");

//Retorna el nombre de la id asignada.
console.log(title.getAttribute("id"));
console.log(title.setAttribute("id, titttttle"));

//añadir clases a un nodo.
title.classList.add("main-title", "title-front");
//Toggle añade la clase si no existe o la elimina si ya existe.
title.classList.toggle("class_name");
//Quitar clases a un nodo
title.classList.remove("hidden");

//.value permite acceder a los valores de los input de un formulario, es decir, lo que el usuario puso en las casillas al rellenar formulario.
const form = document.getElementById("form");
form.name.value;
