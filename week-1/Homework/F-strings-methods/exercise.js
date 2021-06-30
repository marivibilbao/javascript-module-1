// Start by creating a variable `message`
function frase(name){
    var nameLength = name.length;
    let mensaje = "My name is " + name + " and my name is " + nameLength + " characters long.";
    return mensaje;
}

let message = frase ("María");
console.log(message);
