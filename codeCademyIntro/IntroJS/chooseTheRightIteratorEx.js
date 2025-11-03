// Examples to chooose the right iterator

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  1. Choose a method that will return undefined   r: .forEach() 
cities.forEach(city => console.log('Have you visited ' + city + '?'));
console.log(`---`);

// 2. Choose a method that will return a new array     r: filter()
const longCities = cities.filter(city => city.length > 7);
console.log(`---`);

// 3. Choose a method that will return a single value   r: .reduce();
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word);  // output: CODECADEMY
console.log(`---`);

// 4. Choose a method that will return a new array   r: .map()
const smallerNums = nums.map(num => num - 5);
console.log(smallerNums);
console.log(`---`);

// Choose a method that will return a boolean value     r: .some()
console.log(nums.some(num => num < 0));     // output : false 
console.log(`---`);



