
// Example of a custom objecta

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.getname = function (){
        return make + " " + model + " " + year;
    }
}

// object 
var object1 = new Car("Ford", "Mustang", "2023");
console.log(object1.getname());