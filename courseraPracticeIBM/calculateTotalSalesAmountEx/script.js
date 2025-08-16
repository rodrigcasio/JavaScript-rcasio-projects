// Exercise 1 for JSfiddle
// calculate total sales amount:

const sales = [ 
    {item: "Laptop", quantity: 34, price: 350},
    {item: "Mouse", quantity: 40, price: 400},
    {item: "Monitor", quantity: 50, price: 120},
];

function calculateTotal(sales) {
    let total = 0;
    for(let i = 0; i < sales.length; i++){
        total += sales[i].price * sales[i].quantity;
    }
    return total;
}

console.log(`The total sales are: $${calculateTotal(sales)}.`);
