//Calcular año de nacimiento con función.
//let yearBirth = (1989);

//function age(number){
//    return 2021-number;
//}

//console.log(age(yearBirth));

//Otra manera de hacerlo:
let yearsBirth = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

let age = (arr) => arr.map(number => 2021-number);

console.log(age(yearsBirth));
