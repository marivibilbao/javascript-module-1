/* 
  Using .forEach() print the numbers 1 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 1-15 has been provided.
*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

arr.forEach( arr =>{
  if(arr % 3 == 0 ){ //Si es multiplo de 3 tiene que dar 0
    console.log("Fizz")
  }else if( arr % 5 == 0 ){
    console.log("Buzz")
  }else if(arr % 3 == 0 && arr % 5 == 0){
    console.log("FizzBuzz")
  } else{
    console.log(arr)}
});

//----------------------------------------------------------------

//Otra mannera de hacer el ejercicio:
//const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//const isMultiple = (num1, num2) => num1 % num2 == 0;
//const isFizz = (num) => isMultiple(num, 3);
//const isBuzz = (num) => isMultiple(num, 5);
//const getFizzBuzz = function (number){
//  if (isFizz(number) && isBuzz(number)){
//    return "FizzBuzz"
//  }else if (isFizz(number)){
//    return "Fizz"
//  }else{
//    return number
//  }
//}
//arr
//  .map(getFizzBuzz)
//  .forEach(item => console.log(item))

//-----------------------------------------------------------------

/* EXPECTED OUTPUT */

/*
1
2
'Fizz'
4
'Buzz'
'Fizz'
7
8
'Fizz'
'Buzz'
11
'Fizz'
13
14
'FizzBuzz'
*/
