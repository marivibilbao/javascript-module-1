//Ejercicio - Create a function which:
//Takes an array of names
//Looks to see if your name is in the array
//If it is, return Found me!; if not, return Haven't found me :(

//------------------------------------------------------------------------

let names = ["Jesús", "Nancy", "Pedro", "María Victoria"];
let yourName = ("María Victoria");

let myName = names.find(names => names === yourName) ? "Found me!" : "Haven't found me :(" 
// Si mi nombre lo cambio por Ana me dice que no se encontró.
// Utilizo una condición de la siguiente manera ---> ? val1 : val2

console.log(myName);