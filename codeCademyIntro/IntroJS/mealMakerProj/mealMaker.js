// Meal Maker   
// Extra practice at the bottom:


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
    Explanation for const random: meals[Math.floor(Math.random() * meals.length)];

    the variable 'random' holds one object from the meals array.
    Each object in meals has two properties: 'meal' (a string) and 'price' (a number).


    when we write:

    menu.meal = random.meal;
    menu.price = random.price;

    - 'random.meal' gets the 'meal' value from the chosen object (like 'Pizza')
    - 'random.price' gets the 'price' value from the smae object (like '12.99')

    These values are passed down to the setters in the 'menu' object, which update _meal and _price safely.


// another way  more verbose, but it does work:

const random2 = Math.floor(Math.random() * meals.length);
menu.meal = meals[random2].meal;
menu.price = meals[random2].price;
console.log(menu.todaysSpecial);
*/


