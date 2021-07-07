/*
  BOOLEAN WITH COMPARISON OPERATORS
  ---------------------------------
  Using comparison operators complete the unfinished statements.
  The variables should have values that match the expected results.
*/

var studentCount = 16;
var mentorCount = 9;
var moreStudentsThanMentors = studentCount > mentorCount; // finish this statement
//Complete la variable "moreStudentsThanMentors" para que de como resultado: true.
//¿Hay más estudiantes que mentores?

var roomMaxCapacity = 25;
var enoughSpaceInRoom = roomMaxCapacity <= (studentCount + mentorCount); // finish this statement
//Complete la variable "enoughSpaceInRoom", resultado: true
//Si no coloco el símbolo "=" da falso, ya que toma es menor a 25.
//¿Hay suficiente espacio en la sala para todos los estudiantes y mentores?

var personA = "Daniel";
var personB = "Irina";
var sameName = personA == personB; // finish this statement
//Complete la variable sameName.
//A y B tienen el mismo nombre?

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log("Are there more students than mentors?", moreStudentsThanMentors);
console.log(
  "Is there enough space in the room for all students and mentors?",
  enoughSpaceInRoom
);
console.log("Do person A and person B have the the same name?", sameName);

/* 
  EXPECTED RESULT
  ---------------
  Are there more students than mentors? true
  Is there enough space in the room for all students and mentors? true
  Do person A and person B have the the same name? false
*/
