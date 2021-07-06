function exponential(number) {
  return number * number;
}

function isEven(number) {
  return number % 2 === 0;
}

for( let num=5; num<=20; num++){
  if(isEven(num)){
    console.log("El exponencial de " + num + " es " + exponential(num));
  }
}