//Merge two sorted arrays and remove duplicates 

let arr1 = [1, 3, 4, 5, 5];
let arr2 = [2, 4, 4, 6 , 8];

let arr3 = [...arr1, ...arr2]; //... is spread operator but it will contain all the duplicates

arr3.sort( (a, b) => a-b);
// arr3 = [new Set(arr3)];
arr3 = [... new Set(arr3)];
console.log('arr3 is ', arr3);