import { toggleHiddenElement, changeToFunkyColor } from '../modules/dom-functions.js';

const btnElement = document.getElementById('secret-button');
const imgElement = documetn.getElementById('secret-img');

btnElement.addEventListener('click', () => {
  toggleHiddenElement(imgElement);
  changeToFunkyColor(btnElement);
})
