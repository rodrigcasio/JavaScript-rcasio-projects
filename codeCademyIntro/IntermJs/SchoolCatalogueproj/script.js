//Example of School catalogue

// 2 primaryschools, 1 middleschool and 2 highschools stored in the instance of SchoolCatalog
// this time not setting static the atribute and methods of the school catalogue.

class SchoolCatalog {
    _schools = [];
    
    get schools(){
        return this._schools;
    }

    set schools(school){
        this._schools.push(school);
    }
}

//1
class School {
    constructor(name, level, numOfStudents, averageTestScores, schoolOverview){
        this._name = name;
        this._level = level;
        this._numOfStudents = numOfStudents;
        this._averageTestScores = averageTestScores;
        this._schoolOverview = schoolOverview;
    }
    
    get name(){
        return this._name;
    }
    get level(){
        return this._level;
    }
    get numOfStudents(){
        return this._numOfStudents;
    }
    get averageTestScores(){
        return this._averageTestScores;
    }
    get schoolOverview(){
        return this._schoolOverview;
    }

    set numOfStudents(num){
        if (typeof num === 'number' && num > 0){
            this._numOfStudents = num; 
        } else {
            console.log(`Invalid input: numOfStudents must be set to a number`);
        }
    }
    
    quickFacts(){
        console.log(`${this.name} educates ${this.numOfStudents} students at the ${this.level} school level.`);
    }

    static pickSubstituteTeacher(substituteTeacher){
        if(substituteTeacher.length > 0){
            let random = Math.floor(Math.random() * substituteTeacher.length);
            console.log(`Substitute teacher picked: ${substituteTeacher[random]}.`);
        } else {
            console.log(`There are no substitute teachers available!`);
        }
    }
}

// setting 'primary' as the default value of the level property of the constructor
//1.1
class Primary extends School {
    constructor(name, numOfStudents, pickupPolicy, averageTestScores, schoolOverview){
        super(name, 'primary', numOfStudents, averageTestScores, schoolOverview);      
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy(){
        return this._pickupPolicy;
    }
    
}

//1.2
class Middle extends School {
    constructor(name, numOfStudents, averageTestScores, schoolOverview){
        super(name, 'middle', numOfStudents, averageTestScores, schoolOverview);
    }
}

//1.3
class High extends School {
    constructor(name, numOfStudents, sportsTeams, averageTestScores, schoolOverview){
        super(name, 'high', numOfStudents, averageTestScores, schoolOverview);
        this._sportsTeams = sportsTeams;
    }
    
    get sportsTeams(){
        if(this._sportsTeams.length !== 0){
            return `=== Sports Teams === \n${this._sportsTeams.join(', ')}`;
        }
    }
}


// ----- instances

const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13', 90, 'Rogers Ave 2333, #VGSH22');
lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
const colegioGuadalajara = new Primary('Colegio Guadalajara', 3000, 'No rules!', 87, 'Ave Lopez Mateos 2331');

const alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'], 95, 'Nallow St 6341, CHS322');
const tecmi = new High('Universidad TecMilenio', 2332, ['Volley', 'Basketball', 'Tenis'], 89, 'En la montana 12322');
console.log(alSmith.sportsTeams);

//extra
// 0. creating instance of middle class
// 1. creating catalog instances
// 2. adding school into the instance catalog
// 3. outputing schools within the catalog instance

const iteso = new Middle('ITESO', 100, 89, 'Anillo Perif. Sur Manuel Gómez Morín 8585');

console.log(`=== Instances of child classes of School ===`);
console.log(`(each instance of childclasses ['primary', 'middle' and 'high'] are stored in a instance of SchoolCatalog class)`);

const primarySchools2025 = new SchoolCatalog();
primarySchools2025.schools = lorraineHansbury;
primarySchools2025.schools = colegioGuadalajara;
console.log(primarySchools2025.schools);

console.log(`---`);

const middleSchools2025 = new SchoolCatalog();
middleSchools2025.schools = iteso;
console.log(middleSchools2025.schools);

console.log(`---`);

const highSchools2025 = new SchoolCatalog();
highSchools2025.schools = alSmith;
highSchools2025.schools = tecmi;
console.log(highSchools2025.schools);






