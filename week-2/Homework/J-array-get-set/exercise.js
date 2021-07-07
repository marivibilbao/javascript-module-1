/*
  Array getters
  -------------------------
  Complete the functions below to get the first and last values from the array
*/

function first(arr) {
  return arr [0];  // complete this statement
}                 //Retorna el primer valor

function last(arr) {
  return arr [arr.length - 1]; // complete this statement
}                              //.length da la longitud del arreglo (4) y le resto (-1) uno para que devuelva la posición.

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar", "Joe"];

console.log(first(numbers));
console.log(last(numbers));
console.log(last(names));

/* 
  EXPECTED RESULT
  ---------------
  1
  3
  Joe
*/
