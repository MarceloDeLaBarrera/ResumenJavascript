let texto = "Marcelo De La Barrera";

//Slice para obtener una porcion del string
texto.slice(0, 7); //Marcelo
texto.slice(14); //Barrera
texto.substring(14);
texto.substring(7, 0); //Hace lo mismo que slice, tambien puede recibir 2 numeros, pero la diferencia con slice, es que si el primer numero es mayor, lo corrigue y lo toma como si fuera el segundo.

//Split ==> Almacena y corta texto segun caracter de corte en forma de array.
texto.split(" ");

texto.repeat(4); //Para repetir un texto una cantidad de veces. Si el numero no es entero, se trunca, es decir, se elimina la parte decimal.

//search ==> Mediante expresion regular.
texto.search("");

//Convertir todo a miniscula o mayuscula.
texto.toLowerCase();
texto.toUpperCase();

texto.includes("Marcelo"); //return true o false.
texto.trim(); //Quita espacios en blancos del inicio y del final.
texto.startsWith("Mar"); //return true o false, se usa mas para validar.
texto.endsWith("celo"); //return true o false, se usa mas para validar.
texto.indexOf("M"); //Retorna 0, la primera ocurrencia de lo buscado. Se puede usar para validar si texto.indexof("x")==0 es decir, si el string empieza con el caracter "x".
nuevoTexto = texto.replace(texto, "pepe");
