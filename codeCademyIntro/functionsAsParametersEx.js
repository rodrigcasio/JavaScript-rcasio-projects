// Example of using Higher-order-functions


const addTwo = num => {
    return num + 2;
}

const checkConsistentOutput = (func, val) => {
    const checkA = val + 2;
    const checkB = func(val);
    if(checkA === checkB){
        return func(val);
    }else{
        return `inconsistent results`;
    }
}

console.log(checkConsistentOutput(addTwo, 2));      // output : 4 if true



