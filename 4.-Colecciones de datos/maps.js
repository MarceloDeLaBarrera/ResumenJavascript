//Coleccion de datos, similiares a los objetos primitivos. Similar a los diccionarios de python.

//Formas de declaracion,

//1
let mapa = new Map()
mapa.set("nombre", "Marcelo")
mapa.set("apellido", "De La Barrera")
mapa.set("edad", 29)
console.log(mapa)

//2
const mapa2= new Map(
    [
        ["nombre", "Pepeeeee"],
        ["edad", 25],
        ["animal", "perro"]
    ]
)



//Tamaño del map
mapa.size

//Ver si llave existe.
mapa.has("correo") //return false

//Obtener el valor de una llave.
mapa.get("apellido")

//Eliminar una llave.
mapa.delete("apellido")

//Recorrer mapa, usando destructuracion para acceder a la llave y valor.

for(let [key,value] of mapa){
    console.log(`Llave: ${key} : Valor: ${value}`)
}
