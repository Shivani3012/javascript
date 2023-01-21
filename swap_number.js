// swap two numbers with using third variable 

var a = 5 ; 
var b = 10;
var temp = a; //5
a =b; // 10
b = temp; //5 

console.log(" the value of a is "+a);
console.log("the value of a is "+b);

//swap two numbers without using third variable

var x = 5 ; 
var y = 10;
x = x+y; //a=15
y = x-y;  // b=5
x = x-y;  // 10

console.log(" the value of x is "+x);
console.log("the value of y is "+y);