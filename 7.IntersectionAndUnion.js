const arr1 = [1,2,3,4,5];
const arr2 = [3,4,5,6,7];

//find the intersection 
//o/p = 3,4 ,5 
const intersectionArr = arr1.filter((curElem) => {
    return arr2.includes(curElem);  //will check whether current element of arr1 is present in arr2 
});


//find the union - only unique values are added 
//o/p = 1,2,3,4,5,6,7
const unionAr = [...new Set([...arr1, ...arr2])]; // converting set into array





