
// methods used: 
// Object.keys() : returns as an array the properties of an object
// Object.entries() : returns as an array the properties and their values of an object 
// Object.assign()  : create new object with the same properties and values as the object placed but adding extra properties
/*
    How Object.assing() works 
    Object.assign(target)
    Object.assign(target, source1)
    Object.assign(target, source1, source2)
    Object.assign(target, source1, source2, /* …,  sourceN)

target

    The target object — what to apply the sources' properties to, which is returned after it is modified.
    If a primitive value is provided as the target, it will be converted to an object.

source1, …, sourceN

    The source object(s) — objects containing the properties you want to apply.
**/

const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?    r: the objectName  
const robotKeys = Object.keys(robot);
console.log(robotKeys);     // output: the properties

// Declare robotEntries below this line:   
const robotEntries = Object.entries(robot);
console.log(robotEntries);  // output : key's and values 

// Declare newRobot below this line: 

const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot); // created a new object named newRobot with new properties and placing the properties of the robot

console.log(newRobot);

console.log(`---`);

// example with adding them from a varible
const newProperties = {laserBlaster: true, voiceRecognition: true};
const newRobot2 = Object.assign(robot, newProperties);
console.log(newRobot2);


