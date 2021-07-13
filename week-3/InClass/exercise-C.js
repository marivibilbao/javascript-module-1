function magician(yourFunc) {
    console.log(
      "I am magician! Watch as I mutate an array of strings to your heart's content!"
    );
    const namesArray = [
      "James",
      "Elamin",
      "Ismael",
      "Sanyia",
      "Chris",
      "Antigoni",
    ];
  
    const magicOutput = yourFunc(namesArray);
  
    return magicOutput;
  }

//Se agrega función:
let yourFunc = (namesArray) => namesArray
    .map(name => name.toUpperCase());

console.log(magician(yourFunc));

//Otra forma de hacer la función:
//function yourFunc(namesList){
//    return namesList.map(name => name.toUpperCase());
//}

//console.log(magician(yourFunc))
