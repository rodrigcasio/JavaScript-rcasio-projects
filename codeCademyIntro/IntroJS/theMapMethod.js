// Example of using the .map() iterator method

// 1.
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animal => {
    return animal[0];                           // returning the first character of each string into the new "secretMessage" array
});

console.log(secretMessage.join(''));
console.log(`---`);


// 2.
const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(number => {
    return number / 100;
});

console.log(smallNumbers);
