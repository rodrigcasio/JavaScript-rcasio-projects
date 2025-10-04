// Here is an example of using static methods
// static methods allow to be called with the name of the class parent.  
// e.g., 

// class HospitalEmployee { ... }
// static func(){ ... }

// calling it: 
// HospitalEmployee.func()


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
        } else {
            console.log('Could take days off, either wrong input or you dont have more vacation days left!');
        }
    }

    static generatePassword(){
        let random = Math.floor(Math.random() * 10000);
        return random;
    }
}

class Nurse extends HospitalEmployee {
    constructor(name, certifications){
        super(name);
        this._certifications = certifications;
    }

    get certifications(){
        return this._certifications;
    }

    addCertification(newCertification){
        if (typeof newCertification === 'string'){
            this._certifications.push(newCertification);
        }
    }

    static generate
}

const nurseOlynyk = new Nurse('Onlynyk', ['Trauma', 'Pediatrics']);

nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);

// calling static method with parent class name 'HospitalEmployee'
console.log(HospitalEmployee.generatePassword());

// calling static method from the inherited parent class with the subclass 'Nurse'
console.log(Nurse.generatePassword());