// Advanced Objects introduction

// what we will cover is
// 1. using the 'this' keyword 
// 2. conveying privacy in JavaScript
// 3. defining setters and getters in Objects
// 4. creating factory functions
// 5. using destructive techniques


const robot = {
    model: 'B-4MI',
    mobile: true,
    greeting() {
        console.log(`I'm model ${this.model}, how may I be of service?`);
    }
}

const massProdRobot = (model, mobile) => {
    return {
        model,
        mobile,
        greeting() {
            console.log(`I'm model ${this.model}, how may I be of service`);
        }
    }
}

const shinyNewRobot = massProdRobot('TrayHax', true);

const chargingStation = {
    _name: 'Electronics-R-Us',
    _robotCapacity: 120,
    _active: true,
    _chargingRooms: ['Low N Slow', 'Middle of the Road', 'In and Output'],

    set robotCapacity(newCapacity){
        if(typeof newCapacity === 'number'){
            this._robotCapacity = newCapacity;
        }else {
            console.log(`Change ${newCapacity} to a number.`);
        }
    },
    get robotCapacity() {
        return this._robotCapacity;
    }
}









