function calcPorcent(numStu, numMent){
    let total = numStu + numMent;
    let porcentajeStudents = (numStu/total)*100;
    let porcentStud = Math.round(porcentajeStudents);
    return porcentStud;
}

function message(estudiante, profesor){ //Cambie parámetros porque si colocaba los mismos de arriba no corría la función.
    let func1 = calcPorcent(estudiante, profesor); //Llamo a la primera función
    let mensajStuden = "Percentage students: " + func1 + "%";
    let mensajMentor = "Percentage mentors: " + (100-func1) + "%";
    console.log(mensajStuden); //Imprimo porque no quiero que me regrese ningún resultado.
    console.log(mensajMentor);
}

message(15,8); //Llamo función message con los valores de entrada 15 y 8.


//Ejercicio como lo tenía antes:
//function calcStude (numberOfStudents, numberOfMentors){
    //let total = numberOfStudents + numberOfMentors;
    //let porcentajeStudents = (numberOfStudents / total)*100;
    //let message1 = ("Percentage students: " + Math.round(porcentajeStudents) + "%");
    //return message1;
//}

//function calcMent (numberOfStudents, numberOfMentors){
    //let total = numberOfStudents + numberOfMentors;
    //let porcentajeMentors = (numberOfMentors / total)*100;
    //let message2 = ("Percentage mentors: " + Math.round(porcentajeMentors) + "%");
    //return message2;
//}

//let mm1 = calcStude(15, 8);
//console.log(mm1);

//let mm2 = calcMent(15, 8);
//console.log(mm2);
