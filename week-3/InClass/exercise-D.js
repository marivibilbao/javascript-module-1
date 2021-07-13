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

let yourFunc = (namesArray) => namesArray.map(name => name.toUpperCase()); //Mayúsculas

console.log(magician(yourFunc).sort()); //SORT: Orden alfabético