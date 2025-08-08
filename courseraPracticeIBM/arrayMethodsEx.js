
// example for forEach method 
console.log("----- result of forEach method -------\n");

function sendWelcomeEmail(email){
    console.log(`Welcome email sent to ${email}`);   // backticks `
}
const users = [
    { name: "alice", email:"alice@example.com" },
    { name: "bob", email:"bob@example.com"},
    { name: "Charlie", email:"charlie@example.com"},
];

users.forEach((user) => {
    sendWelcomeEmail(user.email);
});

console.log("----- result of map method -------\n");

// Map method example

const products = [
    {name: "tomatoes", price: 250},
    {name: "pasta", price: 100},
    {name: "lettuce", price: 70},
];

products.map((product) => {
    console.log(`The price of ${product.name} is $${product.price}`);
});


console.log("----- result of filter method -------\n");

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

console.log("----- result of reduce method------\n");

const numbers = [3, 42, 56, 2, 20];

const totalNumbersValue = numbers.reduce((total, price) => total + price, 0);   // total = accumulator , price = currentValue, 0 is the initial value of total

console.log("The sum of the numbers is: ", totalNumbersValue);