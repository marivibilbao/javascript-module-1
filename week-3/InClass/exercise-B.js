let studentsA = ["Jesús", "Juan", "Wendy", "Matias", "Julian"];
let studentsB = ["Génesis", "Gabriela", "Caleb"];
let studentsTotal = studentsA.concat(studentsB); //Combino estudiantes A con B

function checkStudents (name, studentsTotal){
    if (studentsTotal.includes(name)){
        console.log(name + "is at the class with " + studentsTotal.join(", "));
    }else {
        console.log(name + "is not at the class with " + studentsTotal.join(", "));
    }
}

checkStudents("Ana ", studentsTotal.sort()); //Ordeno alfabéticamente la lista de estudiantes