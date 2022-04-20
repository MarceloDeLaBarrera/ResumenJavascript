/*Js es Single Trhead y trabajo de forma asincrona y tiene un loop de eventos de operaciones de entrada y salida.

Event Loop= Un ciclo de eventos.
Callstack-> va apilando tareas y dependiendo de si son sincronas o asincronas se iran liberando.

Operaciones concurrentes-> Concurrencia significa cuando 2 o mas tareas 'progresan' simultaneamente sin que empiecen al mismo tiempo necesariamente.
Operaciones paralelas-> Paralelismo es cuando dos o mas tareas se ejecutan al mismo tiempo.

Operaciones bloqueantes--> No devuelve control a hilo/aplicacion hasta que haya terminando su ejecucion/tarea.
Opereaciones no bloqueantes--> Operaciones se ejecutan y devuelven control al hilo principal sin importar que hayan terminado su tarea o no.

¿Cuando sucede la respuesta?
Sincrono ==> La respuesta sucede en el presente. Espera resultado.
Asincrono ==> La respuesta sucede en un futuro. No espera resultado. Suelta el control al hilo principal, y suele ser generalmente no bloqueante.

Codigo Sincrono bloqueante Ej-->

(()=>{

})();


Codigo Asincrono no bloqueante-->

(()=>{

    con setTimeOut se hace que taras sincronas se ejecuten de forma asincrona.
    
})();

*/