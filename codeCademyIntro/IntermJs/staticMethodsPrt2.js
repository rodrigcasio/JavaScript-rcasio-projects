// Practice
// Idea that i had of storing instances of Nurses into a array inside the HospitalEmployee!
// Adding getters to return the arrays, following naming convetions for the arrays _nursesList and _doctorNames
// Adding setters to set inside the constructors of the subclasses 'Nurse' and 'Doctor' the instance or name inside the arrays of the parent class 'HospitalEmployee'

class HospitalEmployee {

    static _nursesList = [];
    static _doctorNames = [];

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
    
    // new 
    static get nursesList(){
        return this._nursesList;
    }
    static get doctorNames(){
        return this._doctorNames;
    }

    // new 
    static set newNurseObject(name){
        this._nursesList.push(name);
    }
    static set newDoctorName(name){
        this._doctorNames.push(name);
    }

    takeVacationDays(daysOff){
        if (typeof daysOff === 'number' && daysOff > 0){
            this._remainingVacationDays -= daysOff;
        } else {
            console.log('Could take days off, either wrong input or you dont have more vacation days left!');
        }
    }
    //new 
    static generatePassword(){
        let random = Math.floor(Math.random() * 10000);
        return random;
    }  
    //new
    static giveRandomDr(){
        let random = Math.floor(Math.random() * this._doctorNames.length)
        return this._doctorNames[random];
    }
}

class Nurse extends HospitalEmployee {
    constructor(name, certifications){
        super(name);
        this._certifications = certifications;
        // HospitalEmployee._nursesList.push(this);     // if we want to store the whole Nurse instance (object) we can do "HosoitalEmployee.nursesList.push(this)"
        HospitalEmployee.newNurseObject = this;      // using the setter function 
    }

    get certifications(){
        return this._certifications;
    }

    addCertification(newCertification){
        if (typeof newCertification === 'string'){
            this._certifications.push(newCertification);
        }
    }
}


class Doctor extends HospitalEmployee {
    constructor(name, surgeries){
        super(name);
        this._surgeries = surgeries;
        // HospitalEmployee._doctorNames.push(this._name);           // storing the name of the doctor instance inside the array doctorsName
        HospitalEmployee.newDoctorName = this._name;        // using te setter function 
    }

    get surgeries(){
        return this._surgeries;
    }

    
}

// instances of Nurse
const nurseOlynyk = new Nurse('Onlynyk', ['Trauma', 'Pediatrics']);
const nurseDani = new Nurse('Dani', ['Orthopedic']);
const nurseAlex = new Nurse('Alex', ['Oncology', 'Anesthetist']);

console.log(nurseDani.name);

// instances of Doctor
const drRodrigo = new Doctor('Rodrigo Casio', 26);
const drLuis = new Doctor('Luis Sanchez', 26);
const drConnor = new Doctor('Connor Cohen', 32);

// using static methods
console.log(Nurse.generatePassword());      // output : random number between 0 - 10000
console.log(HospitalEmployee.nursesList);   // output list of the whole Nurses instances with properties
console.log(HospitalEmployee.doctorNames);      // also works invoking with subclasses inherited... (e.g., Nurse.doctorNames, Nurse.nursesList)

console.log(HospitalEmployee.giveRandomDr());

/*
// output:

rodrigo-casio@rcasioLinux:IntermJs$ !!
node staticMethodsPrt2.js 
Dani
3662
[
  Nurse {
    _name: 'Onlynyk',
    _remainingVacationDays: 20,
    _certifications: [ 'Trauma', 'Pediatrics' ]
  },
  Nurse {
    _name: 'Dani',
    _remainingVacationDays: 20,
    _certifications: [ 'Orthopedic' ]
  },
  Nurse {
    _name: 'Alex',
    _remainingVacationDays: 20,
    _certifications: [ 'Oncology', 'Anesthetist' ]
  }
]
[ 'Rodrigo Casio', 'Luis Sanchez', 'Connor Cohen' ]
Rodrigo Casio                                           // in can generate random doctor names
*/