import { toggleHiddenElement, changeToFunkyColor } from '../modules/dom-functions.js'

const btnElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');

btnElement.addEventListener('click' () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(pElement);
})
