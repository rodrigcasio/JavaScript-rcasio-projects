// Examples of nested objects
// 1. Getting de 0 index value from the array 'favorite foods'  (ln38)
// 2. Creating an array of objects that allow each array of objects to have (ln5)
// 3. Created a variable 'firstPassenger' 
//    assiging the value of the property 'greet' from the nested object 'rodrigo' (ln43)

let spaceship = {
  passengers: [{
    rodrigo: {  // object within the 'passengers' object
        greet: "Hello There"
    }
  }],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"  
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

let capFave = spaceship.crew.captain['favorite foods'][0];
console.log(`${capFave}`);

let firstPassenger = spaceship.passengers[0].rodrigo.greet;   // output: Hello There
console.log(`${firstPassenger}`);

// spaceship.passengers[0] = access to the whole object 'rodrigo'. 
//                          [0] is needed since is needed to access the object 'rodrigo'
// spaceship.passengers[0].rodrigo.greet = access to the value of the property 'greet' from the object 'rodrigo'


