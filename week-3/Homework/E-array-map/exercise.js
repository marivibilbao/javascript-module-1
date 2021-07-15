// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)


var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

//Forma 5:
var numberMultipli = numbers.map(number => number * 100);

console.log(numberMultipli);

//---------------------------------------------------------------------
//Forma 1:
//function multipli(number){
//    return number * 100;    
//}

//var numberMultipli = numbers.map(multipli);
//console.log(numberMultipli);

//---------------------------------------------------------------------
//Forma 2:
//var numberMultipli = numbers.map(function multipli(number) {
//    return number * 100;
//});

//console.log(numberMultipli);

//---------------------------------------------------------------------
//Forma 3 (se quita el nombre de la función):
//var numberMultipli = numbers.map(function (number) {
//    return number * 100;
//});

//console.log(numberMultipli);

//---------------------------------------------------------------------
//Forma 4 (se sustituye la palabra función por la flecha =>):
//var numberMultipli = numbers.map(number => {
//    return number * 100;
//});

//console.log(numberMultipli);

//---------------------------------------------------------------------
