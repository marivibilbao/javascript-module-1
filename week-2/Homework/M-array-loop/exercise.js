/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/

function toGetStringT(array) {
  for (let i = array.length - 1; i > 0; i--) {
    //Declaro variable i = longitud del arreglo -1 da la posición de los datos
    //Condición i > 0 para que se ejecute el for siempre que se cumpla /
    //Descuento 1 a valor de i.
    if (array[i][0] === "T") { // 0 Es el primer caracter de la palabra.
      //Declaro un condicional, El primer caracter comienza con T mayúscula, si es si impreme en pantalla el valor del dato en esa posición.
      console.log(array[i]);
    }
  }
}

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

toGetStringT(daysOfWeek);

//Otra forma de hacerlo:
//daysOfWeek
//  .filter(day => day [0]==="T")
//  .forEach(day => console.log(day))