//Las promesas trabajan con dos recusos principales Resolve y Reject.
//Si la promesa se cumple, es decir, se accede al recurso, se ejecutarà el Resolve
//Si la promesa falla, se ejecutarà el reject.

function cuadradoPromise(value) {
  if (typeof value !== "number") {
    return Promise.reject(`El valor ingresado: '${value}', no es un numero `);
  }
  return new Promise((resolve, reject) => {
    //Settimeout se usara para simular la consulta a una app externa por ej.
    setTimeout(() => {
      resolve({
        value: value,
        result: value * value,
      });
    }, 0 || Math.random() * 100);
  });
}

function cuadradoPromise2(value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        typeof(value) === 'number' ?
        resolve({
          value: value,
          result: value * value,
        })
        :
        reject({
            err: `El valor ingresado: '${value}', no es un numero `
        })

      }, 0 || Math.random() * 100);
    });
  }

//then ==> Si se cumple la promesa, "entonces" ejecutara lo siguiente.
//catch ==> Captura el error generado en el reject.
cuadradoPromise(0)
  .then((obj) => {
    console.log("Inicio Promise");
    console.log("Se cumple la promesa, resolve contiene un obj.");
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(1);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(2);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    console.log("Fin Promise");
  })
  .catch(err=> console.error(err));


  cuadradoPromise2(0)
  .then((obj) => {
    console.log("Inicio Promise");
    console.log("Se cumple la promesa, resolve contiene un obj.");
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise2(1);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise2("2");
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    console.log("Fin Promise");
  })
  .catch(obj=> console.error(obj.err));



const promesa= new Promise((resolve,reject)=>{
  resolve();
})

promesa.then(()=>{
  alert("Exitoso")
})