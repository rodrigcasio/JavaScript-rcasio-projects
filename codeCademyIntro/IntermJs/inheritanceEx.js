// Example of using inheritance in JS for subclasses, that a parent class inherits.
// Here we are setting up the Parent Class that will inherit properties and methods to other subclasses

class HospitalEmployee {
    constructor(name){
        this._name = name;
        this._remainingVacationDays = 20;
    }

    get name(){
        return this._name;
    }

    get remainingVacationDays(){
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff){
        if (typeof daysOff === 'number' && daysOff > 0){
            this._remainingVacationDays -= daysOff;
        }
    }
}