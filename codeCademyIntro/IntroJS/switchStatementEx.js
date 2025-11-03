// This is a quick example of a switch statement
// Checking the medal that needs to be awarded using a switch statement

let athleteFinalPosition = 'gold medal';

switch(athleteFinalPosition){
    case 'gold medal': console.log('You get the gold medal!'); break;
    case 'silver medal': console.log('You get the silver medal!'); break;
    case 'bronze medal': console.log('You get the bronze medal!'); break;
    default: console.log('No medal awarded'); break;    // in JavaScript it is necessary to add a break; for the default case.
}

