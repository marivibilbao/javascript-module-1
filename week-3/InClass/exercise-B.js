let studentsA = ["Jesús", "Juan", "Wendy", "Matias", "Julian"];
let studentsB = ["Génesis", "Gabriela", "Caleb"];
let studentsTotal = studentsA.concat(studentsB); //CONCAT: Combino estudiantes A con B

function checkStudents (name, studentsTotal){
    if (studentsTotal.includes(name)){
        console.log(name + " is at the class with " + studentsTotal.join(", ")); //JOIN: Devuelve cadena separados por coma en este caso.
    }else {
        console.log(name + " is not at the class with " + studentsTotal.join(", "));
    }
}

checkStudents("Juan", studentsTotal.sort()); //SORT: Ordeno alfabéticamente la lista de estudiantes