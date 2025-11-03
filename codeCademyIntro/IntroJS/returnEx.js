// Practice to use return statement in JavaScript

function monitorCount(rows, columns){
    let numberMonitors = rows * columns;
    return numberMonitors;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);