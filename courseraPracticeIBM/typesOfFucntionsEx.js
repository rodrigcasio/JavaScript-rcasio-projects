// types of funnctions 

// example of a named function
const add = function(a, b){
    console.log(a + b);
}
add(70, 7);
// inmmediately invoked function expression example
(function sayHello(){ console.log("Hello mom");})();

// arow function example :
const multiply = (a) => a * a;
console.log(multiply(7));
