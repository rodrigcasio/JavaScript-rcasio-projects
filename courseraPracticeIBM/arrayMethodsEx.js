
// example for forEach method 
console.log("----- result of .forEach method -------\n");
const users = [
    { name: "alice", email:"alice@example.com" },
    { name: "bob", email:"bob@example.com"},
    { name: "Charlie", email:"charlie@example.com"},
];
function sendWelcomeEmail(email){
    console.log(`Welcome email sent to ${email}`);   // backticks `
}
users.forEach((user) => {
    sendWelcomeEmail(user.email);
});

console.log("----- result of .map method -------\n");
// Map method example
const products = [
    {name: "tomatoes", price: 250},
    {name: "pasta", price: 100},
    {name: "lettuce", price: 70},
];
products.map((product) => {
    console.log(`The price of ${product.name} is $${product.price}`);
});

console.log("----- result of .filter method -------\n");
// Filter method example
const products2 = [
    {name: 'Monitor', price: 50},
    {name: 'Mouse', price: 400},
    {name: 'Keyboard', price: 800},
    {name: 'Power supply', price: 1000},
    {name: 'Motherboard', price: 900},
];
function filterProductsByPriceRange(products2, minPrice, maxPrice){
    return products2.filter((product) => product.price >= minPrice && product.price <= maxPrice);   // using the array method as the returned value of this function
}
const minPrice = 500;   // min threshold 
const maxPrice = 1200;  // max threshold
const filteredProducts = filterProductsByPriceRange(products2, minPrice, maxPrice);  // calling the function
filteredProducts.forEach((product) => {
    console.log(`${product.name} is of $${product.price}`);
});

console.log("----- result of .reduce method------\n");
// reduce method
const numbers = [3, 42, 56, 2, 20];
const totalNumbersValue = numbers.reduce((total, price) => total + price, 0);   // total = accumulator , price = currentValue, 0 is the initial value of total
console.log("The sum of the numbers is: ", totalNumbersValue);


console.log("----- result of .find method ------\n");
//  find method

const employees = [
    { id: 1, name: "Alexander", lastName: "Graham", age: 190, 'favorite food': 'pizza'},
    { id: 2, name: "Isaac", lastName: "Newton", age: 23, 'favorite food': "lasagna"},
    { id: 3, name: "Albert", lastName: "Einstein", age: 56, 'favorite food': "lasagna"},
];

const employee = employees.find((e) => e.id == 2);

console.log(`Details of the employee\nname: ${employee.name}\nLast Name: ${employee.lastName}\nage: ${employee.age}\nFavorite Food: ${employee['favorite food']}`);
// for values with one word, we access it in the console.log like this -> '${employee.name}'
// for values with two words, we access it in the console.log like this -> '${employee['word1 word2']}'