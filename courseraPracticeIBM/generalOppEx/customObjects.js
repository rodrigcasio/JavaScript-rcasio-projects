
// Demonstrating JavaScript Constructors, Prototypes, and Instance vs .Shared methods 

// Example of a custom objects

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
console.log(bike2.color);  // output blue;

// adding a method to the prototype motorcycle  after declaring the cosntructor.
motorcycle.prototype.getName = function() {
    return this.make + " " + this.model + " " + this.year + " " + this.color;
}

console.log(bike1.getName());
console.log(bike2.getName());


// =============================================================================
console.log("----------------Prototype example \n");

function animal(name){  // Simple example of what prototype does:
    this.name = name;
}

var animal1 = new animal("Tiger");  // object 

animal.prototype.printName = function () {  // 1. method added:
    return this.name;
}
animal.prototype.makeNoise = function (){   // 2nd method added:
    console.log(this.name + " is making noise!");
}
console.log(animal1.printName());
animal1.makeNoise();

// ===================================================================
console.log("---------Example of using the prototype property with a regular function adding a shared method (function) ---- \n");

function saySomething(){// Using the .prototype property with a regular function and adding a shared method (function)
    console.log("Hello I am..");
}
saySomething.prototype.greeting = function (){
    console.log(" a student!");
}
var obj1 = new saySomething();
obj1.greeting();


// ===================================================================
console.log("---------Example of using the prototype property with a regular function adding a shared property (string) ---- \n");

function saySomething2(){   // example of using it as a shared property... (string)
    console.log("Hello again...");
}
saySomething2.prototype.greeting2 = " I am a student as well from a different fucntion";
console.log(saySomething2.prototype.greeting2);  // using the value



// ===================================================================
console.log("--- using the same function saySomething2() but creating an instance and using the function as a constructor: -------");

var instance1 = new saySomething2();    // output : Hello again... 
console.log(instance1.greeting2);   // no need for prototype keyword here   | output : I am a student as well from a differnet functions
