// Examples of methods
// 1.
// Creating an object
// created method, outside from the declaration

let spaceship = {
    color: 'blue',
    speed: 3000,
};

spaceship = {
     message () {
        console.log(`I come from earth, we come in peace `)
    }
}

spaceship.message();

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
// 1. Setting up an object literal
// 2. Added methods 'retreat()' & 'takeOff()'
// 3. calling functions

const alienShip = {
    retreat() {
        console.log(`${retreatMessage}`);
    },
    takeOff() {
        console.log(`Spim... Borp... Glix... Blastoff!`);
    }
};

alienShip.retreat();
alienShip.takeOff();
