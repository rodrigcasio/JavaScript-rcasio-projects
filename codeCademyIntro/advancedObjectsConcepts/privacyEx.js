// Privacy in objects is defined as the idea that only certain
//  properties should be mutable or able to change in value

// JavaScript does not have a Privacy built for objects, rather
//  JavaScript developers follow naming conventions that signal to
//  to other developers how to interact with a property.
// Common convention is placing the (_) underscore before the name of the property
//  to mean that the property should not be altered, even so.. it is possible to reassing properties with underscore.

// Example 
const robot = {
    _energyLevel: 100,
    recharge(){
        this._energyLevel += 30;
        console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
    }
};

robot._energyLevel = 'high';        // what would happen now that _energyLevel is not a number?

robot.recharge();   // output : Recharged! Energy is currently at high30%.

// This is an example is known as side-effect type coercion. No need to worry about what this means for now,
// but it is important to understand that we can cause unwanted side effects when mutating objects and their properties
