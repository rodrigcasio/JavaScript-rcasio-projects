import domFunctions from '../modules/dom-functions.js';
const { toggleHiddenElement, changeToFunkyColor } = domFunctions;   // destructuring

const btnElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');

btnElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(btnElement);
});


// == another ways to import module functions : ==
// import { toggleHiddenElement, changeToFunkyColor } from '../modules/dom-functions.js'
// import { toggleHiddenElement as toggle, changeToFunkyColor as changeColor } from '../modules/dom-functions.js';



