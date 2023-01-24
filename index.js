/*var myName = "Shivani";  //camelCase 
console.log(myName);
*/


// six data types 
// undefined: typeof instance === "undefined" 
// Boolean: typeof instance === "boolean" 
// Number: typeof instance === "number" 
// String: typeof instance === "string" 
// BigInt: typeof instance === "bigint" 
// Symbol: typeof instance === "symbol" 

/*
console.log(typeof(myName));

console.log(9 - "5") //4 i.e bug

console.log("hello" - "world")  // returns NaN
*/

/* interview questions 
1. Differnce between Null and Undefined (Null is considered as object so it is bug)
2. What is NaN - Not a Number, NaN is a property of the global, it is a variable in global scope
3. Difference betweem == and === 
4. What if truthy and false value
5. Difference between the while and do while loop
6. Difference between the function parameter and the function arguments
7. Why functions are used? - can be resused, call by different arguments
8. let vs const vs var - var is function or global scope and let and const is used or block scope
9. D/B map() and foreach
10. How can you find that child Nodes are present or not
   - by using document.body.hasChildNodes() , returns true if present or else gives false
11. Difference between getElementById() And querySelector()? - getElementById() will use only id selector and querySelector() can use both id and class selector 
12. Can we use this object in the arrow function or where we can't use this object? - this object doesn't work with the arrow function
13. Difference between the Higher ORder and Callback function
14. Difference between Sy7nchronous and Asynchronous Js
*/
/*
var myPhone = 987654321;
console.log(isFinite(myPhone));  // check whether the variable is a number or not and will return true or false

expressions and operators
1. Assignment Operator
2. Arithmetic
3. Comparison 
4. Logical 
5. String
6. Conditional (ternary) 
var x = 5;
var y =5 ;
console.log( "is both equal" + x==y ); // returns false - use of + operator which will compare both the strings

console.log("is both equal : $(x==y)" ); //returns true - use of ECMA script
*/

/* control statements and loops
1. if..else
2. Switch Statement 
3. While loop
4. Do-while loop
5. For loop
6. For in loop
7. For of loop
8. Conditional (ternary) operator - takes three operands ( condition ? value1 :f value2 )
*/

/* there are 5 falsy values in js 
0, "", undefined, null, NaN, false is false anyway

block scope and global scope
*/ 


/*Functions
  ->function defintion - declaration of the function followed by function keyword 
  -> syntax of the function - function functionName(){
        statement of the code 
        return result; - to end the function 
    }
-> calling the function - called as functionName()
-> function expression - create a function and put it into the variable
-> Anonymous Function - A function is similar to and has the same syntax as a function declaration 
One can define "named" function expressions(where the name of the expression might be used in the call stack
    for example) or "anonymous" function expressions.
    var funExp = function(a,b){
        return total = a+b;
    }
funExp(15, 20);
*/ 
/*
function sum( a, b){  // paramters
    var total = a+b;
}

sum(10, 20); // arguments
*/

/* ECMA Script 
  ES6 is used most that is updated in 2015 , it is called as ECMA script 2015 
   -> features added in this 
   1. let and const
   2. template strings
   3. default arguments
   4. destructuring 
   5. object properties 
   6. arrow funcitons
   7. rest operator
   8. spread operator  
*/

/* template literals
    for (let num = 1; num<=10; num++){
        let tableOf = 12;
        console.log(` ${tableOf} * ${num} = ${tableOf *num}`);
    }
*/

/* Arrow Function
     const sum = () => { `the sum of the two numbers is ${(a=5)+(b=6)}`;
     }
   -> if the arrow function contains one line code then there is no need to use the return keyword 
   -> it makes the code optimized and easy to understand
   -> this keyword can't be used in this function 
*/ 

/* Arrays
 -> When we use var, we can stored only single value at a time , so for inserting the multiple values Array is used and in Js 
 we have Array Class and arrays are the prototype of this class
 example : var myFriends = ['ramesh', 'arjun', 'vishal']
 -> Traversal Of an Array - navigating an array like ArrayName[index]
 ->Searching and Filter in an Array
 -> How to Sort and compare an Array
 -> How to insert, Add, Replace and Delete Elements in Array(CRUD)
 -> Map() , Reduce() , Filter()
*/

/*
var myFriends = ['ramesh', 'arjun', 'vishal']; 
myFriends[0];
for( var i=0; i<myFriends.length; i++ ){
    console.log(myFriends[i]);
}
*/

// After ES6 we can traverse array 
/*for(let elements in myFriends ){
    console.log(elements);
}
myFriends.forEach( function(element, index, array){  
    console.log(element + "index: " + index);
});
*/

/* CRUD in an Array
 const animals = ['pigs' , 'goats', 'sheep'];
 animals.push('value') -> enters the value in the end of array, also gives the new length of array
 animals.unshift('value') -> enters the value in the front of array
 animals.pop() -> deletes from the last of array
 animals.shift() -> removes the first element from an array 

 const newArray = arrayName.splice(index, howmany, item1, ....., itemX))- splice method adds or removes and overwrites the original array 
 animals.indexOf("data") -  returns -1 if data is not present else it will give you the index of that value
*/

/* 
 1. map() method
 -> def - map() creates a new array from calling a function for every array element.
map() calls a function once for each element in an array.
map() does not execute the function for empty elements.
map() does not change the original array.
 -> syntax - array.map(function(currentValue[, index[, arr]]), thisValue)
 let arr = [1, 4, 6, 25]
 let newArr = arr.map((curElem, index, arr) => {
    return curElem>9;
 })

 2. reduce() method
 -> def - The reduce() method executes a reducer function for array element.
The reduce() method returns a single value: the function's accumulated result.
The reduce() method does not execute the function for empty array elements.
The reduce() method does not change the original array.
->syntax - array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
*/ 

 /* Strings
   StringName.length
   Stringname.search('substring')
   slice(start, end)
   substring(start, end)- doesnot accept negative index at the place of end 
   substr(start, length) - doesnot add the negative values in place of the length but at start position we can use the negative index
   String.prototype.replace(searchFor, replaceWith) - ex: StringName.replace("oldvalue" , "newValue") , doesnot change the original string, is case sensitive
   -> Extracting the strings
      str.charAt(index);
      str.charCodeAt(index); gives the unicode of character at the specific index passed in the argument
   str1.concat(str2)
   str.toUpperCase()
   str.toLowerCase()
   str.trim() - removes the white spaces from the starting and ending
   str.split( ", "); str.split(" ") i.e str.split("delimeter") - converts string into array
 */ 

/* Date and Time - 4 ways to create
    new Date()
    new Date( year, month, day, hours, minutes, seconds, milliseconds) - it takes 7arguments
    new Date(miliseconds)
    new Date(date string)
    -> new Date().toLocalString() - gives the local time of own country
    ->Date.now() - calculates the milliseconds since 1Jan 1970 
    console.log(new Date().toLocaleString());  //15/1/2023, 12:06:30 pm 
    console.log(new Date().toLocaleDateString()); // 15/1/2023
    console.log(new Date().toLocaleTimeString()); //12:06:31 pm
*/

/* Math object
    ->Math.PI()
    ->Math.round() - round to its nearest intger- Math.round(num)
                     ex- Math.round(10.25) -10
    ->Math.pow(x, y) - x to the power of y
    ->Math.sqrt(num) - sqaure root of the number
    ->Math.abs(x) -  gives the absolute value of the given number that is always return positive values , ex- Math.abs(-99) - output99
    ->Math.ceil(x) -  rounds a number rounded UP to the nearest integer.
    ->Math.floor(x) - rounds a number DOWN to the nearest integer.
    ->Math.min(array) - returns the min value present in array
    ->Math.max(array) - returns the max value present in array
    ->Math.random() - returns between 0 and 1
    ->Math.trunc() - returns the interger part of the number it will remove the decimal part irrespective of the sign
    ->
*/

/* DOM in js
     -> Difference between the window and the document 
Window                                                                      Document 
It represents the document loaded inside the window or browser.	          It represents the browser window in which you are seeing the content.
The properties related to it are stored in the document object.	          The properties related to it are stored in the window object.
It is loaded after the loading window because the window contains a 
document.	                                                               It is loaded before the document because window container document.
It is the root element of the document object model.	                   The window is the global element for all objects, functions, etc.
It is an object of window.	                                               It is an object of the browser.
We can not access windows objects properties inside the document.	       We can access document object properties inside the window.
logically: document:{ properties}                                          logically:window:{document:{properties}}
Example: document.title will return the title of the document	           Example: window.document.title will return the title of the document.

    -> Difference between the DOM and the BOM(Broswer Object Model)
    BOM                                                                  	DOM
Is Browser Object Model	                                                   Is Document Object Model
Used for access and manipulation of the browser window	                   Used to manipulate the HTML document.
No standard set of rules, each browser has its own standards for           Has a set standard of rules to be used across documents.
implementing BOM	

->alert/confirm/prompt are also a part of the BOM
-> Finding HTML Elements
document.getElementById(id)	- Find an element by element id
document.getElementsByTagName(name) - Find elements by tag name
document.getElementsByClassName(name) - Find elements by class name
element.setAttribute(attribute, value) -	Change the attribute value of an HTML element
-> Adding and Deleting Elements
document.createElement(element) - Create an HTML element
document.removeChild(element) - Remove an HTML element
document.appendChild(element) - Add an HTML element
document.replaceChild(new, old) - Replace an HTML element
document.write(text) - Write into the HTML output stream
documemt.querySelector('#id or .class')
etc. 
 
*/

/* Events in js 
 ->4 ways of creating events
 -> Event Object - is the parent object of the event object 
 ->MouseEvent - onmousedown() and onmouseup() , mouseenter() , mouseleave() etc.
 ->KeyboardEvent - when user presses the key in from keyboard 
      onkeypress() , onkeyup(), and onkeydown()
 ->InputEvents - onchange(), 
 When same name of the event is called then it follows the bottom up approach that is it will call the last event with the same name and will ignore the above event having the same name
 ex- fourtWay.addEventListener('click', ()=>{
    alert('Hello');
 })
 fourtWay.addEventListener('click', ()=>{   // this event will be called ignoring the above event having the same name 
    console.log('Hello'); 
 })
*/ 

/* Timings based event Listeners 
  ->setTImeout(fun, milliseconds) -executes after waitin a specified number of milliseconds
  ->setInterval(fun, milliseconds)- repeats the execution of the fun continuously
  ->clearTimeout() 
  ->clearInterval()
   
*/

/* OOPS 
-> 1st way to create the object 
   let bioData  = {
        name : "Shivani",
        age : 26,
        getData : function(){
            console.log(`My name is {name} and my age is {age}`);
        }
   }
   console.log(bioData.name);
-> 2nd way 
   let bioData  = {
        name : "Shivani",
        age : 26,
        getData (){
            console.log(`My name is {name} and my age is {age}`);
        }
   }
-> What if we want object as a value inside a object
    let bioData  = {
        name : {
            fName : "Shivani",
            lName : "Goyal"
        },
        age : 26,
        getData (){
            console.log(`My name is {name} and my age is {age}`);
        }
    }
    console.log(bioData.name.fname);
-> what is this object
    - it contains the current context
    - this object can have multiple values depending on where it is placed
    - will not work with the arrow function
    ex- console.log(this); // will give the global object i.e window object
    ex- function myName(){  // will give window object
        console.log(this);
    }
    ex- let myName = 'vinod'; 
    function myNames(){  // will give vinod
        console.log(this.myName);
    }
 
*/

/*destructuring
    -> Array destructuring
        const myBioData = ['Vinod', 'thapa'];
        let [myFName, myLName] = myBioData;  // this is called destructuring of array
    we can add values too like 
        let [myFName, myLName, myAge = 23] = myBioData;
    -> Object destructuring 
        class bioData = {
            myFName : 'Shivani',
            age : 23
        }
        let {myFName, age} = bioData;
*/

/* Object Properties
    -> we can now user Dynamic Properties\
        let myName = "Vinod";
        const Bio = {
            [myName] : "Hello",  // dealing with dynamic data by writing in the sqaure brackets
            26 : "is my age"
        }
    -> no need to write key and value, if both are same
        let myName = "vinod thapa";
        let myAge = 26;
        const myBio = {
            myName : myName,
            myAge : myAge
        } or we can write like 
        const myBio = { myName, myAge }
        console.log(myBio);
*/
/* Spread Operator
   -> this operator is used to directly call an array in other if we want to copy entire array
      const colors = ['red', 'yellow', 'blue'];
      const myFavColors = [...colors , 'white', 'orange'];
      console.log(myFavColors);
*/

/* ES7 features
    1. Array.prototype.include() method - arrayName.include('value') returns true if present else false
    2. Exponential operator
*/

/* ES8 Features 
    1. string padding
    2. Object.values() - Prints the values present in object
    3. Object.entries() - returns the key value pairs in the form of array
    
*/

/* ADVANCED JAVASCRIPT  
    1. Event Propagation(Event Bubling and Event Capturing)
    2. Higher Order Function
    3. Callback Function
    4. Function Currying
    5. Callback Hell
    6. AJAX call using XMLHttprequest
    7. JSON
    8. Fetch API
    9. Promises
    10. Async-Await
    11. Error Handling in Js
*/

/* Event Propagation
    ->Event Propagation mode determines in which order the elements recieve the event
    ->Bubling phase - bottom to up(default phase until not defined)
    ->Capturing Phase - top to down
    ->Broadly categorized into three phase -
        1.The Capture Phase
        2.The Target Phase
        3.The Bubble Phase
    Ex- parentId = getdocumentbyId('#parentId');
        parentId.addEventListener('click', functionName, true/false); // third parameter used for event propagation 
         here false is used for bubling phase and true is used for capturing phase 
*/

/*Higher Order Function
    A function which takes another function as an argument or returns a function is known as a higher order function. 
*/

/*Callback Function
    A callback is a function passed as an argument to another function.
*/

/* Example - 
    const add = (a,b) => {
        return a+b;
    }
    const sub = (a,b) => {
        return Math.abs(a-b);
    }
    const calculator = (num1, num2, operator) =>{  // third paramter will call the func
        return operator(num1, num2);
    }
    calculator(5, 2,l add);
*/

/* How Javascript works and Asynchronous Javascript
    1.Hoisting
        ->Hoisting is a concept that enables us to extract values of variables and functions even before initializing/assigning value without getting 
        errors and this happens during the 1st phase (memory creation phase) of the Execution Context.
    2. Scope Chain
        ->used to resolve the value of variable names in JS
    3. Lexical Scoping In Js
        ->inner function can get access to their parent functions variables but the vice-versa is not true
    4. Use Strict Mode
        -> syntax - "use strict"
        -> ex - x = "vinod";
                console.log(x); // will show error because we have used strict mode 

    5. this keyword
    6.Closures in js
        -> a closure is the combination of a function bundled together (emclosed) with references to its surrounding state(lexical environment).
        ->in other words, a closure gives you access to an outer scope from an inner function.
        -> closures are created every time a function is created, at function creation time. 
        -> same like lexical scoping
        -> const outerFun = (a) =>{
            let b = 10;
            const innerfun = ()=> {
                let sum = a+b;    //here a is the variable of outer function and still it can be accessed by the inner function 
                console.log(`the sum is ${sum}`);
                }
            return innerFun;
            }
            let checkClosure = outerFun(5);
            checkClosure(); // will call the sum is 15
    7.What is Ssynchronous Js Programming 
        -> Example - 
                const fun2 = () => {
                    console.log(`Function 2 is called`);
                }
                const fun1 = () => {
                    console.log(`Function 1 is called`);
                    fun2();
                    console.log(`Function 1 is called again`);
                }
    8.What is Asynchronous Js Programming
        ->no one has to wait till another function is completed
        ->setTimeout() is an asynchronous method 
        ->Example - 
                 const fun2 = () => {
                    setTimeout(() => {
                        console.log(`Function 2 is called`);
                    }, 2000);
                }
                const fun1 = () => {
                    console.log(`Function 1 is called`);
                    fun2();
                    console.log(`Function 1 is called again`);
                }
    9. What is Event Loop 
        ->JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events,
        and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.

*/


/* Function Currying
*/

/*Callback Hell
*/

/*AJAX call using XMLHttprequest
*/

/*JSON
*/

/*Fetch API

*/

/*Promises
*/

/* Async-Await
*/

/* Error Handling in Js
*/