// Project for practicing variables in JS

// Today's forecast in temperature kelvin:
const kelvin = 0;

// converting kelvin to celsius
const celsius = kelvin - 273;

// converting the current temperature in fahrenheit with a formula
let fahrenheit = celsius * (9 / 5) + 32;

// using the .floor() method from the built-in Math object to round down the value of fahrenheit
fahrenheit = Math.floor(fahrenheit);

// using string interpolation
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);

// === extra practice ===

// converting celsius to newton scale using the floor() method to round down the result of the fomula c * (33/100);
const newtonScale = Math.floor(celsius * (33/100));

// using string interpolation
console.log(`The temperature is ${celsius} degrees celsius, and converted to Newton scale, the value is ${newtonScale}.`);



