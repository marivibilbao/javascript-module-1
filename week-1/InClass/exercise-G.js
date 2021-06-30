let numberOfStudents = 15;
let numberOfMentors = 8;
let total = numberOfStudents + numberOfMentors;

let porcentajeStudents = (numberOfStudents / total)*100;
let porcentajeMentors = (numberOfMentors / total)*100;

console.log("Percentage students: " + Math.round(porcentajeStudents) + "%");
console.log("Percentage mentors: " + Math.round(porcentajeMentors) + "%");