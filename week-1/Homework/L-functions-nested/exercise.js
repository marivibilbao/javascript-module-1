function calcStude (numberOfStudents, numberOfMentors){
    let total = numberOfStudents + numberOfMentors;
    let porcentajeStudents = (numberOfStudents / total)*100;
    let message1 = ("Percentage students: " + Math.round(porcentajeStudents) + "%");
    return message1;
}

function calcMent (numberOfStudents, numberOfMentors){
    let total = numberOfStudents + numberOfMentors;
    let porcentajeMentors = (numberOfMentors / total)*100;
    let message2 = ("Percentage mentors: " + Math.round(porcentajeMentors) + "%");
    return message2;
}

let mm1 = calcStude(15, 8);
console.log(mm1);

let mm2 = calcMent(15, 8);
console.log(mm2);


//Información de entrada que va en el ejercicio 2 (Error L-2)
//var mentor1 = "Daniel";
//var mentor2 = "Irina";
//var mentor3 = "Mimi";
//var mentor4 = "Rob";
//var mentor5 = "Yohannes";
