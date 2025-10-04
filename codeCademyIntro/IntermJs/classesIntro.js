// Example of using classes

class Dog {
    constructor(name, behavior = '0'){
        this._name = name;
        this._behavior = behavior;
    }

    get name(){             // must have getters for the atributes '_name and _behavior', otherwise they will be undefined
        return this._name;
    }

    get behavior(){
        return this._behavior;
    }
    
    incrementBehavior(){
        this._behavior++;
    }
}

const halley = new Dog('Halley');

console.log(halley.name);
console.log(halley.behavior);

halley.incrementBehavior();

console.log(halley.name);
console.log(halley.behavior);
