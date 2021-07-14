//Primero hice esta función:
//let year = (2005);
//function birthYear(year){
//    if ((2021-year) >= 17){
//        return `Born in ${year} can drive`;
//    }else{
//        x = 17 - (2021-year);
//        return `Born in ${year} can drive in ${x} years`;
//    }
//}
//console.log(birthYear(year));

let yearsBirth = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
let calculAge = (arr) => arr.map(number => 2021-number);
let age = calculAge(yearsBirth);

let drive = (arr) => arr.map(number => number >= 17
    ? console.log("Born in " + (2021 - number) + " can drive.") 
    : console.log("Born in " + (2021 - number) + " can drive in " + (17 - number) + " years."));

drive(age);