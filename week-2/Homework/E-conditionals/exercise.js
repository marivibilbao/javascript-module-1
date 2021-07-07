/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

var name = "Daniel";
var danielsRole = "mentor";

if (danielsRole == "mentor"){ //Si la variable "danielsRole" es igual a mentor
  console.log("Hi, I'm Daniel, I'm a mentor."); //Imprime este mensaje
} else{ // Si no va imprimir este otro resultado, hice la prueba cambiando la variable mentor por student y funcionó.
  console.log("Hi, I'm Daniel, I'm a student.")
}

/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/
