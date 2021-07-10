/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a while loop

*/

//Hice el ejercicio sumando

let n = 10;

function sumTillNum(num){
	//your code here 
	while(num > 0){ //Se agrega condición, mientras el número sea mayor que 0, hace lo que sigue. Si la condición es verdadera.
		sumProgre += num; //0 + número (10). La sumProgre sería 10 en la primera vuelta. En la segunda vale 19. 10+9+8+7+6+5+4+3+2+1+0
		num = num-1 //valor de número -1.
	}
	return sumProgre;
}

let sumProgre = 0;
console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));


//--------------------------------------------------------------------

//Forma para cadena (explicada durante la clase):
//function sumTillNum(num){
//	let texto = "";
//	for(let i=0; i <= num; i++){
//		if (i > 0){
//			texto += " + ";
//		}
//		texto += i;
//	}
//	console.log(texto);
//}
//Para que me de como resultado: 0 + 1 + 2 + 3 + 4

//--------------------------------------------------------------------

//Para entender el ejercicio:
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