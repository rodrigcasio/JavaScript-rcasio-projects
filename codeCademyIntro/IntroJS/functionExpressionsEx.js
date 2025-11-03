// Example of the concept function expressions

// define a function expression to help us check the day of the week an dif the plant needs to be watered

const plantNeedsWater = function(day){
    return day === 'Wednesday' ? true : false;
}

// or 
/*
    if(day === 'Wednesday'){
        return true;
    }
    return false;   // if it is not Wednesday.
*/
console.log(plantNeedsWater('Tuesday'));

