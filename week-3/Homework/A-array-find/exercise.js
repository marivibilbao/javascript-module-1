/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

//Primero hice la función normal:
//var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"]; //Venia ya definido en el ejercicio.
//function myFunct(names){
//  return (names.length > 7) && (names[0] == "A");
//}
//let findLongNameThatStartsWithA = names.find(myFunct);
//console.log(findLongNameThatStartsWithA);

//-----------------------------------------------------------------------------------------------------

var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"]; //Venia ya definido en el ejercicio.

let findLongNameThatStartsWithA = (names) => names.find(name => name[0] == "A" && name.length > 7);

var longNameThatStartsWithA = findLongNameThatStartsWithA(names); //Venia ya definido en el ejercicio.

console.log(longNameThatStartsWithA); //Venia ya definido en el ejercicio.

/* EXPECTED OUTPUT */
// "Alexandra"
