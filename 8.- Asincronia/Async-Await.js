//Funciones Asincronas: Esperan a que algo se cumpla para poder seguir ejecutando. Trabajan en conjunto con las promesas.
//Await: Se espera el resultado de la ejecucion antes de pasar a la siguiente linea de codigo de ejecucion. AWAIT es solamente valido dentro de una funcion asincrona.

async function funcionAsincronaDeclarada(){
    try{

        console.log("Inicio Async Function")
        let obj= await cuadradoPromise(0); //Puede ser undefined por el setTimeOut, se añade await para que espere el resultado antes de pasar a la siguiente linea de codigo.
        console.log(`Async Function: ${obj.value}: ${obj.result}`)

        obj= cuadradoPromise(1);
        console.log(`Async Function: ${obj.value}: ${obj.result}`)

    }catch(err){
        console.error(err)
    }
}

funcionAsincronaDeclarada();

//Funcion asincrona expresada
const funcionAsincronaExpresada= async ()=>{

    try{
        console.log("Inicio Async Function")
        let obj= await cuadradoPromise(0); //Puede ser undefined por el setTimeOut, se añade await para que espere el resultado antes de pasar a la siguiente linea de codigo.
        console.log(`Async Function: ${obj.value}: ${obj.result}`)

        obj= cuadradoPromise(1);
        console.log(`Async Function: ${obj.value}: ${obj.result}`)

    }catch(err){
        console.error(err)
    }
}


const getImagen = async() =>{
    try{

        const apiKey = "sJJ4XFt6xChdx9DKz0T3riuet3wozzRN";
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data: {images: {original : {url} } } } = await resp.json()
        const img= document.createElement('img')
        img.src=url
        document.body.append(img)

    }catch(error){

        console.log(error)
    }
}
getImagen()
