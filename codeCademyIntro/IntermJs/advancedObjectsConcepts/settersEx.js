// Example of setting up a setter method inside an object in JavaScript

// 1. Created a setter method named 'numOfSensors' as well with a parameter 'num' for the argument (ln22)
// 2. Setting a condition to check if the argument added as a parameter is a number (ln23)
// 3. if condition valued to be true, we set this._numOfSensors = num to change the value of the property _numOfSensors 
// 4. If the argument is not an number.. we log into the console the message (ln28)
// 5. Calling the setter method to assign 100 to the _numOfSensors property value
// 6. Checking if it worked we using the getter method numOfSensors


const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,

    get numOfSensors(){
        if(typeof this._numOfSensors === 'number'){
            return this._numOfSensors;
        }else {
            return `Sensors are currently down.`;
        }
    },
    
    set numOfSensors(num){
        if(typeof num === 'number' && num >= 0){
            this._numOfSensors = num;
        }else {
            console.log(`Pass in a number that is greater than or equal to 0`);
        }
    },
};

robot.numOfSensors = 100;
console.log(robot.numOfSensors);
