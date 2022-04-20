//LIBRERIA PARA MANIPULAR TIEMPO MAS FACILMENTE: """""""" MomentJS """""""""" Se instala con npm.

const dt = new Date();

//Dia del mes, retorna numero.
dt.getDate();

//Dia de la semana. (En js estan dee domingo a sabado como si fuera arreglo, parte de posicion 0 a 6.)
dt.getDay();

//Mes del año en numero. (Parte de 0 a 11).
dt.getMonth();

//Retorna el año actual.
dt.getFullYear();

//Retorna hora, min y sec. Ejemplo si son las 06:05:44 seg..... retornaria
dt.getHours(); //6  ... Van de 0 a 23.
dt.getMinutes(); //5
dt.getSeconds(); //44

//Retorna la fecha y hora en formato: 12/3/2022 19:24:02
dt.toLocaleString();

//Solo fecha
dt.toLocaleDateString();

//Solo hora
dt.toLocaleTimeString();

//Obtener total de milisegundos en un dia:
let msTotales = 1000 * 60 * 60 * 24;

//Obtener fecha en timestamp => Numero de segundos que han pasado desde 1970.
console.log(Date.now);

let fechacumple = new Date(1992, 7, 7);
let fechaActual = new Date();
console.log(fechacumple);

//Diferencia en milisegundos.
let diff_fechas = fechaActual - fechacumple;

//Convertir a dias sabiendo la cantidad totales de milisegundos de un dia.
let dias_transcurridos = diff_fechas / msTotales;

//Meses, años transcurridos....
let meses_transcurridos = dias_transcurridos / 31;
let años_transcurridos = meses_transcurridos / 12;
