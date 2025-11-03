// Examples of iterators 
// Which are array methods:

// forEach()

const artist = ['Picasso', 'Leonardo Da-Vinci', 'Matisse', 'Frida Khalo'];

artist.forEach(artist => {
    console.log(`${artist} is one of my favorite artist.`);
})

console.log(`---`);

// .map()

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
    return number * number;
})

console.log(squareNumbers);

console.log(`---`);

// .filter()

const things = ['desk', 'chair', 7, 'backpack', 3.4, 100];

const onlyNumbers = things.filter(thing => {
    return typeof thing === 'number';
})

console.log(onlyNumbers);

