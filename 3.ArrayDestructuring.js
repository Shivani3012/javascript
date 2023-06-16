//Array destructuring
let arr = [2, 3,5, 8, 9, 7];

// let [arr1, arr2, arr3, arr4, arr5, arr6] = arr;
let [arr1, arr2, ...arr3] = arr;  //...rest operator 


//use case 
// swap number 
let num1 = 50;
let num2 = 60;
/* traditional way 
let temp ;
temp = num1; 
num1 = num2;
num2 = temp;
*/

// in one line using array destructuring 
[num1 , num2] = [num2, num1];
console.log(num1, num2);

