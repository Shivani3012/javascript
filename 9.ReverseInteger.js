const revInt = (num) =>{
    let myRevString = num.toString().split("").reverse().join("");
    if (myRevString.endsWith("-")){
        myRevString = "-" + myRevString;
        return parseInt(myRevString);
    }else{
        return parseInt(myRevString);
    }
};

console.log(revInt(123));
 