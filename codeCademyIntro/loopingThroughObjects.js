// Example of how to loop through objects with the for..in loops

let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below
//  1. creating a for..in loop to iterate through spaceship.crew object 
//  2. creating another for...in loop to iterate again through spaceship.crew object and loggin into the consol their names and degrees

for(let crewMem in spaceship.crew){
    console.log(`${crewMem}: ${spaceship.crew[crewMem].name}`);
}

console.log(`---`);

for(let crewMem in spaceship.crew){
    console.log(`${spaceship.crew[crewMem].name}: ${spaceship.crew[crewMem].degree}`);
}


// For practice: setting a reference to the function inside the nested object captian
//               Basically assingning the function 'cheerteam' itself to f
//
// const f = spaceship.crew.captain.cheerTeam;
// f();

