let names = ["Jesús", "Nancy", "Pedro", "María Victoria"];

let nameInicio = names.unshift ("Sasha"); //Agregar nombre al inicio del array utilizando .unshift
let nameFinal = names.push("Ruvi"); //Agrego al final de la lista un nombre.

//names[5] = "Ruvi"; //Cuando sabes la posición. Agrego al final de la lista un nombre.

console.log(names); //Imprimo nombres del array.
console.log("Número de personas de la lista: " + names.length); //LENGTH para saber la cantidad de string que tiene el array.