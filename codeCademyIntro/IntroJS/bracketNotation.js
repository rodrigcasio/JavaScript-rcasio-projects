// Example of accessing a key's value using the bracket notation

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';

// Write your code below
const isActive = spaceship['Active Mission'];

console.log(`${isActive} - ${spaceship[propName]}`);


console.log(`---`);

// using a function
const returnAnyPropValue = (objectName, propName) => objectName[propName];

// examples using the function:
//  the property must be placed as a string 'propName'

const propValue = returnAnyPropValue(spaceship, 'homePlanet');          
console.log(`The value of the property 'homePlanet' is : ${propValue}`);


const propValue2 = returnAnyPropValue(spaceship, 'numCrew');
console.log(`The value of the property 'numCrew' is : ${propValue2}`);

const propValue3 = returnAnyPropValue(spaceship, 'Fuel Type');
console.log(`The value of the property 'Fuel Type' is : ${propValue3}` );






