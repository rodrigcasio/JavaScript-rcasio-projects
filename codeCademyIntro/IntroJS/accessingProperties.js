// Example of accessing properties in JS 

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

// Write your code below
const crewCount = spaceship.numCrew;
const planetArray = spaceship.flightPath;

console.log(`${crewCount}, ${planetArray.join(' ')}`);    // output : 5, Venus Mars Saturn
