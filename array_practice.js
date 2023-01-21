// find the sqaure root of each element in an array
let arr = [25, 36, 49, 81 ];
let arrSqr = arr.map((currElem) => Math.sqrt(currElem) //don't need to use return keyword as it is single line code
);
console.log(arrSqr);

// multiply each element by 2 and return only those elements which are greater than 10
let arr1 = [2, 3, 4, 6, 8];
let result = arr1.map((currElem) => {
    return currElem*2;
}).filter((currElem) => { currElem>10; });
console.log(result);