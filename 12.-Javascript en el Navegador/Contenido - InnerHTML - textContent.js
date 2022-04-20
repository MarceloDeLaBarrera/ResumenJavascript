//textContent --> el Contenido de los elementos.
const title = document.querySelector("h1");

//<h1 class= "title"> El <span> DOM </span> </h1>

console.log(title.textContent); //Retorna el string contenido en el h1, aunque hayan etiquetas interiores que contengan texto.
//Return: El dom

console.log(title.innerHTML); //Retorna lo que esta dentro del elemento, incluyendo etiquetas html interiores.
//Return: El <span> DOM </span>

console.log(title.outerHTML); // Todo el elemento en forma de string, todo el h1 y su contenido.
//return: <h1 class= "title"> El <span> DOM </span> </h1>

//Todos los anteriores pueden setearse:

document.getElementById("shipping-info").innerHTML = "";
