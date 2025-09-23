// A factory function is a function that returns an object and can be reused
// to make multiple object instances 
// Factory functions can have parameters to allow us customize the object that gets returned

// 1. Creating a factory function for making a robot object 
// 2. Creating an instance object named tinCan by using the robotFactory function
// 3. callin the beep() method with the object created 'tinCan'

const robotFactory = (model, mobile) => {
    return {
        _model: model,
        _mobile: mobile,
        beep(){
            console.log(`Beep Boop`);
        }
    };
};

// robots:
const tinCan = robotFactory('P-500', true);
tinCan.beep();

console.log(`----`);


// Example 2:  creating a factory function to create multiple monsters objects

// 1. setting up a factory functions
// 2. returning the properties, methods and getters and setters for age
// 3. creating the object evilGhost using the returned value of calling the 'monsterFactory' function
// 4. logging into the console the entire 'evliGhos' object 
// 5. changing the value properties of age using the setter function age 


const monsterFactory = (name, age, energySource, catchPhrase) => {
    return {
        _name: name,
        _age: age,
        energySource: energySource,
        scare(){
            console.log(catchPhrase);
        },
        get age() {
            if(typeof this._age === 'number'){
                return this._age;
            }else {
                console.log(`Age is not available`);
            }
        },
        set age(num){
            if(typeof num === 'number'){
                this._age = num;
            }else {
                console.log(`Place the age parameter as a number`);
            }
        },
    };
};

// monsters: 
const evilGhost = monsterFactory('Casper', 320, 'happines', 'BOO!');
const jason = monsterFactory('Jason The Killer', 45, 'Loneliness', 'Apears out of nowhere');
const michaelMyers = monsterFactory('Michael Myers', 100, 'Death', 'Apears out of nowhere holding a kitchen knife');

console.log(evilGhost);
console.log(jason);
console.log(michaelMyers);

console.log(evilGhost.age);   // using the getter method
evilGhost.age = 1000;           
