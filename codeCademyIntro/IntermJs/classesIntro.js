// Example of using classes

class Dog {
    constructor(name){
        this.name = name;
        this.behavior = 0;
    }

    get name(){
        return this.name;
    }

    get behavior(){
        return this.behavior;
    }
    
    incrementBehavior(newB){
        if (typeof newB === 'number' && newB > 0){
            this.behavior = newB;
        } else {
            console.log(`Couldn't set new behavior. Please add a number as input`);
        }   
    }
}

