// built-in method .pop() in JavaScript
// removes the last item of an array

const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

// removing the last element of the array
chores.pop();

console.log(chores);    // making sure it was removed 

console.log(`-----`);
// 2nd example of using pop (storing the removed value)

const newItemTracker = ['item 0', 'item 1', 'item 2'];
console.log(newItemTracker);

const removed = newItemTracker.pop();
console.log(`this item was removed: ${removed}`); // output 'item 2'
