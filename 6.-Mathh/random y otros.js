//Numero random entre 0 y 1
Math.random();

//Numero random entre 1 y 10, incluido dedcimales.
Math.random() * 10;

//Round redondea a integer. Numero random entre 1 y 10, de tipo entero.
Math.round(Math.random() * 10);

//ceil redondea hacia arriba, genera entero.
Math.ceil(2.4);

//sign retorna -1, 0 ó 1... Dependiendo si el valor es negativo, 0 o positivo.
Math.sign(-6); //retorna -1

//Valor absoluto, aunque sean numeros negativos, los convierte a positivos.
Math.abs(-300);

//Potencia
Math.pow(2, 4);

array = [7, 5, 88, 43, 3];
Math.min(array);

//Floor redondea hacia abajo.Numero random entre 2 valores.
const random_num = (min, max) => Math.floor(Math.random() * (max - min)) + min;
