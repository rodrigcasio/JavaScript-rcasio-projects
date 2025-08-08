
// example for forEach method 
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

// Map method example

const products = [
    {name: "tomatoes", price: 250},
    {name: "pasta", price: 100},
    {name: "lettuce", price: 70},
];

products.map((product) => {
    console.log(`The price of ${product.name} is ${product.price}`);
});