// Meal Maker   

const menu = {      // 1.
    _meal: '',      // 2.
    _price: 0,       // 3. 

    set meal(mealToCheck){      //5.
        if(typeof mealToCheck === 'string'){        // 6.
            this._meal = mealToCheck;
        }else {
            console.log(`Place the meal as a string`);
        }
    },

    set price(priceToCheck){        // 7.
        if(typeof priceToCheck === 'number'){
            this._price = priceToCheck;
        }else {
            console.log(`Place the price as a number`);
        }
    },
    
    get todaysSpecial(){    // 9.
        if(typeof this._meal === 'string' && this._meal.length > 0 && typeof this._price === 'number' && this._price > 0){
            return `Today's Special is ${this._meal} for $${this._price}!`;
        }else {
            return `Meal or price was not set correctly!`;
        }
    },
};

// 8. 
menu.meal = 'Fettuccine Alfredo'; 
menu.price = 20.99;
console.log(menu);


console.log(menu.todaysSpecial);        // 11.

console.log(`---`);

// example         adding an array of meals and prices, and randomly set Todays's Special using setters


const meals = [
    { meal: 'Pizza', price: 12.99 },
    { meal: 'Carbonara', price: 17.99 },
    { meal: 'Raviolli', price: 20.99 }
];

const random = meals[Math.floor(Math.random() * meals.length)];          // getting a random number meals[0] or [1] or [2] 
menu.meal = random.meal;
menu.price = random.price;

console.log(menu.todaysSpecial);

/*
// another way 
const random2 = Math.floor(Math.random * meals.length);
menu.meal = meals[random2];
menu.price = meals[random2];
console.log(menu.todaysSpecial);
*/
