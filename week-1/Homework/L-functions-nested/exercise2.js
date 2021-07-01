//Declaración de variables
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

// Función para convertir letras en mayúsculas:
function mentors(names){
    return mayu = names.toUpperCase();
}

//Función que imprime el mensaje + nombre en mayúsculas y llama a la función "mentors"
function message(name1, name2, name3, name4, name5){
    console.log("HELLO " + mentors(name1)); //Imprime en pantalla 4 veces
    console.log("HELLO " + mentors(name2));
    console.log("HELLO " + mentors(name3));
    console.log("HELLO " + mentors(name4));
    console.log("HELLO " + mentors(name5));
}

//Llama a la función mensaje con los parámetros mentor.
message(mentor1, mentor2, mentor3, mentor4, mentor5);


//JavaScript existe la función toLowerCase() para convertir a «minúsculas», 
//y la función toUpperCase() para convertir a «mayúsculas», según sea el caso.

//Ejemplo A: Convertir cadena de texto a Mayúscula
//--cadena = 'Texto De Prueba';
//--cadena = cadena.toUpperCase();
//--document.write(cadena);

//Ejemplo B:  Convertir texto de minúsculas a mayúsculas usando prompt
//--var texto = prompt("Introduce el texto");
//--document.write(texto.toUpperCase());// Imprimira en mayuscula