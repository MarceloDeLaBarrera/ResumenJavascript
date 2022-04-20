
//setTimeOut recibe una callback a ejecutar y un timeout.
//Lo del codigo se ejecutara una vez al pasar un segundo.
let temporizador= setTimeout(()=>{
    console.log("Ejecutando"), 1000
})

//Para que algo se ejecute cada cierto tiempo.
let interval= setInterval(()=>{
    console.log("Se ejecuta cada cierto tiempo")
},3000)

//Ej, con un reloj.
setInterval(()=>{
    console.log(new Date().toLocaleTimeString());
},1000)

//ClearTimeOut para limpiar un setTimeOut, pero funciona solamente si esta guardado en una variable.
clearTimeout(temporizador);
clearInterval(interval);