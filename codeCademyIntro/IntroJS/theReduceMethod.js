// Example of the .reduce() iterator 
// .reduce() can have 2 arguments..
// 1. the callback function
// 2. (optional) a value to use as the first argument to the first call of the callBackFunction
//              if not provided this second argument, the first element of the array will be used 
//              as the accumulator, and the currentValue will start from the second element

const newNumbers = [1, 3, 5, 7];

// 1.
const newSum = newNumbers.reduce((accumulator, currentValue) => {
    console.log(`The value of the accumulator: ${accumulator}`);
    console.log(`The value of the currentValue: ${currentValue}`);
    
    return accumulator + currentValue;
});

console.log(newSum);        // output: 16

console.log(`---`);

// 2.

// .reduce() with two arguments (theCallbackFunction, initialValue);
const newSum2 = newNumbers.reduce((acc, currentVal) => {
    console.log(`acc value: ${acc}.\ncurrentVal value: ${currentVal}`);
    return acc + currentVal;
}, 0);     // <--- 0 is the second argument (0 = initialValue);

console.log(newSum2);


