// Examples which introduce the use of the 'this' keyword
// the 'this' keyword references the *calling object*
//  which provides access to the calling object's properties.

// 1. creating an object 'robot' with two key-pair values
// 2. adding a method provideInfo()
// 3. inside the returned string, using interpolation; we get access to the 'robot' object properties value with the keyword 'this'
// 4. loggin into the console the call of the function

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
        return  `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
    }
};

console.log(robot.provideInfo());







