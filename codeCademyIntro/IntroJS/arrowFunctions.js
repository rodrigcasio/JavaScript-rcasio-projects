// Example of using arrow functions

const plantNeedsWater = (day) => {
    return day === 'Wednesday' ? true : false;
};

console.log(`The plant needs to be watered?: ${plantNeedsWater('Wednesday')}`);


// or ...
/*
const plantNeedsWater2 = (day) => {
    if(day != 'Wednesday'){
        return false;
    }
    return true;
};
*/