let myVal = 0;
const myNumber1 = myVal || 10; //will display t0
const myNumber2 = myVal ?? 10; //will give the default value if the value is null or undefined
console.log(myNumber1);
console.log(myNumber2);
