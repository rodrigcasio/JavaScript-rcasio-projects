// Example of using default parameters

// 1. example:
function greeting(name = 'strager'){    // default parameters 'stranger'
    console.log(`Hello! ${name}.`);
}

greeting(); // output : Hello! stranger.
greeting('Rodrigo'); // output : Hello! Rodrigo.

// 2. example:  changing them into default parameters of things we commonly buy
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}

console.log(`-----`)
makeShoppingList();
console.log(`-----`)
makeShoppingList('water', 'sugar', 'honey');
console.log(`-----`)
makeShoppingList('noodles', 'pokemon-cards', 'laptop');


