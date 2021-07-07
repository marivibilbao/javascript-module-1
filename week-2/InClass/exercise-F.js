function isUser(user) {
    let letter = user[0].toUpperCase();
    if (letter == "A" || letter=="E" || letter=="I" || letter=="O" || letter=="U"){
        return "Username valid";
    } else {
        return "Username invalid"
    }
}

let user = "María";
console.log(isUser(user));