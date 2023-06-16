const arr = [12, 3, 5, 89, 1];

//function for finding

// const getSmallest = (arr) => {   // for finding the max number same algo will execute except one condition that is num will ne larger 
//     let smallNum = Number.POSITIVE_INFINITY;
//         for ( const num of arr){
//             if( num < smallNum){
//                 smallNum = num;
//             }
//         }
//     return smallNum;
// }


// one line method 
const getSmallest = (arr) => {
    return arr.reduce((smallNum , num ) => Math.min(smallNum, num) ); // smallNum is the current value 
};

const data = getSmallest(arr);
console.log(data);