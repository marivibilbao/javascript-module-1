//Ejercicio:
//Create a function which accepts an array of "messy" strings.
//This function should:
//Remove all non-string entries
//Change the strings to upper case, and add an exclamation mark to the end

let messy = [
    100,
    "iSMael",
    55,
    45,
    "sANyiA",
    66,
    "JaMEs",
    "eLAmIn",
    23,
    "IsMael",
    67,
    19,
    "ElaMIN",
  ];

let sinNumberMayu = messy.filter(item => typeof item === 'string') //Filtra y deja sólo los string.
  .map(item => item.toUpperCase() + "!") //Para que los deje todos en mayúsculas.

console.log(sinNumberMayu);