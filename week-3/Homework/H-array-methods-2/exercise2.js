/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  //return str.split(nombre => nombre.charAt(0).toUpperCase()).join();
  let primeraMayusc = str[0].toUpperCase() + str.slice(1);
  return primeraMayusc.split().join();
}


// SPLIT() Divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.

//JOIN() Une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.

//SLICE() Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). 
//El array original no se modificará.

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
