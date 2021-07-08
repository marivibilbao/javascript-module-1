/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a for loop

*/

let n = 10;

function sumTillNum(num){
	//your code here
	for(let i=n; i > 0; i--){ //Para, declaro variable i / condición i mayor que 0 / descuento uno a cada vuelta a i. 
		sumProgre += i;
	}						 // i-- es igual que i-1.
	return sumProgre;
}

let sumProgre = 0;
console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));
