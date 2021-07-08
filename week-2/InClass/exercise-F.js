let user1 = ["Maria", "administrador"];
let user2 = ["Pedro", "manager"];
let user3 = ["Antonio", "normal"];
let user4 = ["Ana", "normal"];

function validarUser(array) {
    if (array[1] == "manager" || array[1] == "administrador") {
        console.log("Usuario Valido por tipo administrador o manager.");
      } else if ( (
        array[0][0] == "A" ||
        array[0][0] == "E" ||
        array[0][0] == "I" ||
        array[0][0] == "O" ||
        array[0][0] == "U") && (array[0].length < 10) && (array[0].length > 5) )
       {
        console.log("Usuario Valido porque empieza por vocal y cumple con caracteres entre 5 y 10.");
      } else {
        console.log("Usuario invalido.");
      }
    }

validarUser(user2);

//function isUser(user) {
//    let letter = user[0].toUpperCase();
//    if (letter == "A" || letter=="E" || letter=="I" || letter=="O" || letter=="U"){
//        return "Username valid";
//    } else {
//        return "Username invalid"
//    }
//}

//let user = "María";
//console.log(isUser(user));
