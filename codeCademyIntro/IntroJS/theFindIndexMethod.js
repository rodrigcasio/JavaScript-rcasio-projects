// Example of using the .findIndex() method 

// stores the first index that meets the condition to be true

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

// finding the index of the first item that is named 'elephant'.
const foundAnimal = animals.findIndex(animal => {
    return animal === 'elephant';
});

console.log(foundAnimal);       // output: 7 


console.log(`---`);

// 2.
// findin the index of the first animal that starts with the letter 's'
const startsWithS = animals.findIndex(animal => {
    return animal[0] === 's';
})

console.log(startsWithS);        // output : 3   








