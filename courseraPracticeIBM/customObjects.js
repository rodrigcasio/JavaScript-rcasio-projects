
// Example of a custom objecta

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.getname = function (){            // not recommended since every instance of this constructor creates a brand new copy of this getName function()
        return make + " " + model + " " + year;
    }
}

// object... instances of the cosntructor Car  
var object1 = new Car("Ford", "Mustang", "2023");   // it has a brand new getName()
console.log(object1.getname());
var object2 = new Car("Susuky", "lala", 2020);  // it has a brand new getName() as well.. not recommended to have functions inside the constructor
console.log(object2.getname());

// ============================

// example of a prototype
function motorcycle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}
// instances of motorcycle:
var bike1 = new motorcycle("Honda", "H-23", 2023);
var bike2 = new motorcycle("Italica", "f-11", 2025);

console.log(bike1.model);   // outputs  H-23.
console.log(bike2.year); // outputs 2025

motorcycle.prototype.color = "red"; // adding a property to every instance of motorycycle

console.log(bike1.color); // output red;

bike2.color = "blue";
console.log(bike2.color);  

// adding a method to the prototype motorcycle  after declaring the cosntructor.
motorcycle.prototype.getName = function() {
    return this.make + " " + this.model + " " + this.year + " " + this.color;
}

console.log(bike1.getName());
console.log(bike2.getName());