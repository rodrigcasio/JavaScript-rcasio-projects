// exercise 2 JS fiddle
// Generate an order receipt

const orderedItems = [
    {item: "Socks", quantity: 32, price: 5.99},
    {item: "Shoes", quantity: 23, price: 28.99},
    {item: "Pants", quantity: 49, price: 15.50},
];

function generateReceipt(orderedItems){
    let grandTotal = 0;
    console.log(`\t=== Receipt ===`);
    for(let i = 0; i < orderedItems.length; i++){
        const itemTotal = orderedItems[i].quantity * orderedItems[i].price;
        console.log(`Item: ${orderedItems[i].item} | Quantity: ${orderedItems[i].quantity} | Price: ${orderedItems[i].price} | Total: ${itemTotal}`);
        grandTotal += itemTotal;
    }
    console.log(`\t=========\nTotal Amount: $${grandTotal}`);
}

generateReceipt(orderedItems);

// console.log("=== Reciept in a separated string ===");
// console.log(`Ordered Items: \nSocks | Quantity: ${orderedItems[0].quantity} | Total: ${orderedItems[0].quantity * orderedItems[0].price}\nShoes | Quantity: ${orderedItems[1].quantity} | Total: ${orderedItems[1].quantity * orderedItems[1].price}\nPants | Quantity: ${orderedItems[2].quantity} | Total: ${orderedItems[2].quantity * orderedItems[2].price}\n\tGrand Total: $${calculateTotal(orderedItems)}.`);