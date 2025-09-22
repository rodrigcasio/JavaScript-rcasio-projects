// This is an example of identifying the concept 'pass by reference'

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
// 1. writing a function that sets as a parameter an object to set a new property and value (ln14)
// 2. creating another function that takes an object as a parameter and sets or reassigns that objects disabled property to the value of true (ln18)
// 3, 3.1. calling function 'greenEnergy' and log it into the console the object to see the changed parameter    (ln22-23)
// 4. Both functions pretty much do the same thing since it is not reassigning the obj parameter to have new parameters 

const greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil'
}

const remotelyDisable = obj => {
    obj.disabled = true;
}

greenEnergy(spaceship);
console.log(spaceship);

remotelyDisable(spaceship);
console.log(spaceship);


console.log(`------`);
// --- IMPORTANT example:

let spaceship2 = {
    homePlanet2: 'Mars',
    color: 'red'
};


const tryReassignment = obj => {
    obj = {
        identified : false,
        'transport type': 'flying'
    }
    console.log(obj);       // output: { 'identified': false, 'transport type': 'flying'}

};

tryReassignment(spaceship2);   // the attempt to reassign does not work
console.log(spaceship2);       // it still returns initial properties and values : {homePlanet2: 'Mars', color: 'red'}

spaceship2 = {
    identified: false,
    'transport type': 'now actually flying',
}; // regular reassignment still works 




/*  what happened in the IMPORTANT example ^^^
 
    We declared this spaceship object with let. This allowed us to reassign it to a new object with identified and 'transport type' properties with no problems.
    When we tried the same thing using a function designed to reassign the object passed into it, the reassignment didn’t stick (even though calling console.log() on the object produced the expected result).
    When we passed spaceship into that function, obj became a reference to the memory location of the spaceship object, but not to the spaceship variable. This is because the obj parameter of the tryReassignment() function is a variable in its own right. The body of tryReassignment() has no knowledge of the spaceship variable at all!
    When we did the reassignment in the body of tryReassignment(), the obj variable came to refer to the memory location of the object { 'identified': false, 'transport type': 'flying' }, while the spaceship variable was completely unchanged from its earlier value.

*/




