// Example of using getters!

// Getters can perform an action on the data when getting a property 
// Getters can return different values using conditionals
// in a getter, we can access the properties of the calling object using 'this'

// setting up a setter function (ln15)
// adding a condition if the typeof of _energyLevel is a number, we return a string interpolation using the 'this' keyword  (ln16)
// calling the getter method like syntetically accessing a property. No need for parenthesis (ln24)


const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
        if(typeof this._energyLevel === 'number'){
            return `My current energy level is ${this._energyLevel}`;
        }else {
            return `System malfunction: cannot retrieve energy level`;
        }
    }
};

console.log(robot.energyLevel);



