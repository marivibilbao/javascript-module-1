function frase(name){
    var nameLength = name.trim().length; // Agrego .trim() para que quite espacios en el nombre.
    let mensaje = "My name is " + name + " and my name is " + nameLength + " characters long.";
    return mensaje;
}

let message = frase ("María "); // Agrego espacio para que la función .trim() quite espacios.
console.log(message);
