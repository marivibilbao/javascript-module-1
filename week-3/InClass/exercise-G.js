let yearsBirth = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

console.log("These are the birth years of people who can drive: " + (yearsBirth.filter(number => 2021-number >=17).join(", ")));



//let calculAge = (arr) => arr.map(number => 2021-number);
//let age = calculAge(yearsBirth);

//let drive = (arr) => arr.map(number => number >= 17
//    ? console.log("Born in " + (2021 - number) + " can drive.") 
//    : console.log("Born in " + (2021 - number) + " can drive in " + (17 - number) + " years."));

//drive(age);