function secondMatchesAmy(array) {
  if (array[1] === "Amy") {
    return "Second index matched!";
  }
  return "Second index not matched";
}

let names = ["Alex", "Amara", "Carlos"];
let names2 = ["Anna", "Amy", "Natalia"];

const result = secondMatchesAmy(names2); 
console.log(result);

//console.log(secondMatchesAmy(["uno", "dos", "tres"]));