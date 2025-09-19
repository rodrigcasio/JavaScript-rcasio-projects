// Adding new properties or changing their key's values


let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
// changing the value of key color property
// Adding a property to the object
// Deleting a property      (deleted = undefined)

spaceship.color = 'glorious gold';
spaceship.numEngines = 7;

const valueProp = (objectName, propName) => objectName[propName];
const colorValue = valueProp(spaceship, 'color');
const numEngineValue = valueProp(spaceship, 'numEngines');

const f = valueProp;
const homePlanetVal = f(spaceship, 'homePlanet');

delete spaceship["Secret Mission"];

console.log(`${colorValue} - ${numEngineValue} - ${homePlanetVal} - ${f(spaceship, 'Secret Mission')}`);


