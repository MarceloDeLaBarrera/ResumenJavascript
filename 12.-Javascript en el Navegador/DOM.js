// DOM => Document object model. Modelo de objetos del documento.

//Ademas, el DOM no es parte de la especificacion de javascript, es una API que se consume con JS.

//A nivel de jerarquia, antes que document viene window, es un objeto mayor.

//Todo el html es un documento, un doctype. Toda etiqueta del html es un objeto. Y cada objeto puede tener sus hijos interiores. NOTA: Lo correcto es llamarlo nodo ya que el DOM es como un arbol que se va ramificando. DOM TREE.
//Adicionalmente tambien, cada etiqueta html es un elemento. El texto interior es un nodo de tipo texto. Por lo que todo elemento es un nodo, pero no todo nodo es un elemento.

//document es una variable global, que representa un objeto que contiene todo el html.

//nodeType--> 1 Elemento. 2 Atributo. 3 Texto. 8 Comentario.

document.doctype;
document.head;
document.body;
document.title;
document.charset;

//Todos los js del documento
document.scripts;

//Todos las hojas de estilo css
document.styleSheets;

//Todos los links que hayan en el documento
document.links;
document.links[100];

//Las imagenes.
document.images;
