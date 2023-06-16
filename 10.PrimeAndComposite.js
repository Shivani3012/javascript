let num = 10;
var isPrime = true;
//for loop 
for (let i=2 ; i<num ; i++){
    if(num%i == 0){
        isPrime = false;
    }
}

if(isPrime == true){
    console.log("Is a prime number");
}
else{
    console.log("Not a prime number");
}