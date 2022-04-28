//SET--> Es similar a un arreglo pero solo acepta valores unicos.

//Los objetos son diferentes, son una referencia unica a la memoria de javascript.

const set = new Set([1,2,3,4,5,5,5, true, false, false, {}, {}, "hola", {}, "HoLa"]) //En este caso, los 5, false no se repiten, pero los objetos si porque cada cual es un objeto unico.

//Tamaño del set.
set.size

//Agregar elementos a un set
const set2= new Set()
set2.add(2)

//Borrar elementos.
set.delete("hola") //Se le pasa elemento que se desea eliminar

//Verificar si un set tiene un elemento en su interior.
set.has(55)

//Limpiar un set.
set.clear()

//Recorrer set
for(item of set){
    console.log(item)
}

//Con foreach
set.forEach(element=> console.log(element))

//Acceder a una posicion del set... Array desde el set.
const array= Array.from(set)
