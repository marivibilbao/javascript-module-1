/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a while loop

*/

let n = 10;

function sumTillNum(num){
	//your code here 
	while(num > 0){ //Se agrega condición, mientras el número sea mayor que 0, hace lo que sigue.
		sumProgre += num; //0 + número (10). La sumProgre sería 10 en la primera vuelta.
		num = num-1 //valor de número -1.
	}
	return sumProgre;
}

let sumProgre = 0;
console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));


//Para enterder el ejercicio:
//let n = 3;
//let sumProgre = 0;

//function sumTillNum(num){
	//while(num > 0){
		//console.log("num="+num);
		//sumProgre += num;
		//console.log("numProgresivo="+sumProgre);
		//num = num-1;
	//}
	//return sumProgre;
//}
//console.log("Total suma progresiva="+sumTillNum(n));

//----------------------------------------------------------------------

//Prueba ejercicio diapositivas
//let count = 1;

//while(count <= 100){ 
	//console.log("The count is: " + count);
	//count += 1;
//}
//Resultado:  The count is: 1
			//The count is: 2
			//The count is: 3
			//The count is: 4