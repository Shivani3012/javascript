//create set 
 const mySet = new Set();
 // add values using add method.
 mySet.add(1);
 mySet.add(2);
 mySet.add(3);
 mySet.add(4);
 mySet.add(5);

 // to find the length of the set
 console.log(mySet.size);

 // if value exits or not using has method
 console.log(mySet.has(4)); // returns true or false 

// delete a value from set 
console.log(mySet.delete(3));

//iterate over the set
for ( let setvalue of mySet){
    console.log(setvalue);
}

//create set using the constructor 
const array = [1, 2 , 3 , 4 , 5];
const mysetArr = new Set(arrat);
console.log(mysetArr.size)  // gives 6 as size as it will remove all the duplicates 

// use case 
// to remove the dupkicates from array convert it into the set then it will remove all the duplicates

