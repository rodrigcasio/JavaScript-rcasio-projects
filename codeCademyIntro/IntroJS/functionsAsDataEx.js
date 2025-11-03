
// Undertanding how functions in javascript are objects.
// And can be assingned to a varible

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// assigning to a shorter-named variable, the function above

const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

isTwoPlusTwo();


// if we forgot the original name of the function 
// using the name property to find out

console.log(`Using ".name" property to find out the original function name: ${isTwoPlusTwo.name}`);
