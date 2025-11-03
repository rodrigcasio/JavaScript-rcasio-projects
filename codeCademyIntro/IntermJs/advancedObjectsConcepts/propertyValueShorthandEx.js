// Property Value shorthand 

/*  Exaplanation: 

    Imagine we had to include more properties inside the factory function?
    i would be tedious, But we can use a destructuring technique, called 'Property Value shorthand',
    to save ourselfs some keystrokes. We can use Property Value shorthand when the key and the variable 
    passed in as the value share the same name.

    example:
    const monsterFactory = (name, age) => {
        return {
            name,
            age 
        };
    };

    this works the same as
    const monsterFactory = (name, age) => {
        return {
            name: name,
            age: age
        }
    };
*/

// Exercise example

const robotFactory = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  };
};

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)



