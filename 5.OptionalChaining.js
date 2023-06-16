const user = {
    name : "Thapa",
    age : 28,
    address : {
        street : "Main Street",
        city : "New Road",
        state : "Pk",
        zip : 10101,
    }
}

console.log(user.address.city);  //New Road 
//optional Chaining
console.log(user.address.roadNumber?.houseNumber);  //will give undefined instead of error as we have used optional chaining
console.log(user.address?.roadNumber?.houseNumber);  //if address exist then print else go to roadnumber 

// can also be used for array 
const users = [
    {name : "John " , age: 30},
    {name : "ABc" , age: 25}
]

console.log(users[3]?.name);  //replacement of if else statement 




