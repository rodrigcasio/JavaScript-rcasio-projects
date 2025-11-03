// Example of creating helper functions

function monitorCount(rows, columns){
    return rows * columns;
}
function costOfMonitors(rows, columns){  // needs the same amount of arguments to use the function monitorCount() function inside.
    return monitorCount(rows, columns) * 200;
}

// Save the totalCost in a variable
const totalCost = costOfMonitors(5, 4);

console.log(`The total cost is: $${totalCost}.`);
