// Arrow functions and 'This'
// This is an example that the takeaway is to avoid using arrow functions
//  when using 'this' in a method!

/*  EXAMPLE of avoiding this

const robot = {
    energyLevel: 100,
    checkEnergy: () => {
        console.log(`Energy is currently at ${this.energyLevel}%.`);
    }
}

robot.checkEnergy();        // outputs : ${this.energyLevel} = undefined 

*/


const robot = {
    energyLevel: 100,
    checkEnergy() {
        console.log(`Energy is currently at ${this.energyLevel}%.`);
    }
}

robot.checkEnergy();    // outputs  : ${this.energyLevel} = 100
