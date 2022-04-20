//Sirve para crear elementos, es decir, etiquetas html.
const profesor = document.createElement("h2");

//Como printearlo en navegador:
profesor.textContent = "alexis perez";
profesor.classList.add("teacher");
profesor.id = "teacher"; // Profesor es una etiqueta h2, por lo que .id le coloca una id a la etiqueta.

// appendChild viene desde un elemento, y lo que hace es añadir un elemento como ultimo hijo de otro.
document.body.appendChild(profesor);

//Para agregar un elemento dentro de otro elemento. Se guarda el contenedor al cual se le quiere agregar un elemento.
const profesorContainer = document.getElementById("teacher-div");

if (profesorContainer && profesorContainer.querySelector("span")) {
  //Encuentra el primer span dentro del elemento, y le agrega dentro de el al hijo.
  profesorContainer.querySelector("span").appendChild(profesor);
}
