// Examples of Arrow function declarations

// normal way
// const plantNeedsWater = (day) => {
//     return day === 'Wednesday' ? true : false;
// }

// refactor the function 
const plantNeedsWater = day => day === 'Wednesday' ? true : false;

/*  Examples of Concise Body Arrow Functions 

    1. zero parameters
    const functionName = () => {};
    
    2. One parameter
    const functionName = paramOne => {};

    3. Two or more parameters
    const functionName = (paramOne, paramTwo) => {};
    
    4. single-line block
    const functionName = number => number + number;
*/
    // 5. Multi-line block
    const sumSameNumber = number => {
        const sum = number + number;
        return sum;
    }

    // example:
    const squareNum = num => num * num;

// instead of
// const squareNume = (num) => {
//     return num * num;
// }

    console.log(squareNum(6));

