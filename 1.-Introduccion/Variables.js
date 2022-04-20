//Var, Let y Const.

//Con var se puede redeclarar variables pudiendo generar errores.Ej:
/**
 * var nombre= "pepe"
 * var nombre = "rope"
 **/

//Con let y const no se puede redeclarar, arroja error.

//Const y Let mantienen las variables dentro de bloques protegidas, es decir, no se pueden acceder a ellas fuera del bloque. Por ej, no se les puede hacer console.log fuera del bloque.
//bloque= lo que este dentro de corchetes, un if, un for, etc.

//La diferencia entre let y const es que let es para variables y const para constantes... Si se intenta modificar el valor de una constante, arrojará error.
//Hay una excepción en el caso de const, con los arreglos,  donde se puede añadir elementos asi como quitarlos. En el caso de los objetos, no se puede modificar una clave, pero si se puede modificar su valor y añadir nuevos pares clave/valor.

//Otra diferencia entre let y const, es que const requiere que se le asigne un valor a la variable, si no arroja error.

//En conclusión siempre que no se quiera que el elemento cambie de valor, se usará const. Caso contrario, se usará let.

let alumno;

const colores = ["rojo", "verde"];
colores.push("rosa");

const NOMBRE_EMPRESA = "Empresita";

console.log(alumno); //retorna undefined porque la variable no esta definida.

alumno = "perro";
