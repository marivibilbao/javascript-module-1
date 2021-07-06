function getMood(animo){
    if (animo === "happy"){
        return "Good job, you're doing great!";
    } else if (animo === "sad"){
        return "Every cloud has a silver lining";
    } else if (typeof animo === "number"){
        return "Beep beep boop";
    } else { //En cualquier otro caso que haga esto
        return "I'm sorry, I'm still learning about feelings!";
    }
}

console.log(getMood("hola"));