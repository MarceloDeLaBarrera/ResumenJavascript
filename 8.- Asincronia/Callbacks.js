//Callback ==> Funcion que se ejecturá despues de que otra lo haga.
//Se suelen usar en funciones como parametros.

function cuadradoCallback(value, callback) {
  //Settimeout se usara para simular la consulta a una app externa por ej.

  setTimeout(() => {
    callback(value, value*value);
  }, 0 || (Math.random() * 100));
}

cuadradoCallback(0, (value,result)=>{
    console.log("Inicial Callback");
    console.log(`Callback: ${value}, ${result}`)
} )