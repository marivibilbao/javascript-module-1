function boolChecker(bool) {
  if (typeof bool === "boolean") { //Se completa con boolean
    return "You've given me a bool, thanks!";
  }

  return "No bool, not cool."; //No se ejecuta porque es el segundo de la función y sólo se ejecuta uno.
}

console.log(boolChecker(true)); //Agregamos un console.log