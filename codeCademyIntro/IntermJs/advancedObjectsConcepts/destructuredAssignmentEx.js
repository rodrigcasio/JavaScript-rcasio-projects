// Destructured Assignment allows us to extract key values easier 
// storing them into variable with the same name as the property inside { } braces and assigning it to the object name


const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

// 1. using 'destructured assignment' to create a const variable named functionality that extracts functionality nested object 
// 2. calling functions that are placed in the functionality nested object.

const { functionality } = robot;

functionality.beep();
functionality.fireLaser();





