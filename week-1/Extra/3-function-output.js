// Add comments to explain what this function does. You're meant to use Google!
function getNumber() {
  return Math.random() * 10; //La función Math.random() retorna un punto flotante (con decimales), un número pseudo-aleatorio dentro del rango [0, 1) (nunca va devolver 1).
}

// Add comments to explain what this function does. You're meant to use Google!
function s(w1, w2) {
  return w1.concat(w2); //Combina dos o más cadenas de texto y devuelve una cadena de texto nueva.
} //Devuelve dos cadenas concatenadas.

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together.
  // Otra manera de hacer 
  //return firstWord + " " + secondWord + " " + thirdWord;
  return firstWord.concat(" " + secondWord + " " + thirdWord);
  // Look at the test case below to understand what this function is expected to return.
}

/* ======= TESTS - DO NOT MODIFY =====
There are some Tests in this file that will help you work out if your code is working.
To run these tests type `node 3-function-output` into your terminal
*/

const util = require('util');

function test(test_name, actual, expected) {
    let status;
    if (actual === expected) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
}

test(
  "concatenate function - case 1 works",
  concatenate('code', 'your', 'future'),
  "code your future"
);
test(
  "concatenate function - case 2 works",
  concatenate('I', 'like', 'pizza'),
  "I like pizza"
);
test(
  "concatenate function - case 3 works",
  concatenate('I', 'am', 13),
  "I am 13"
);
