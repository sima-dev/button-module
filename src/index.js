import './button.css';

import {
  button
} from './button.js';

console.log(button);
// Можно выбрать любой элемент, куда хотим поместить кнопку
const parent = document.querySelector('body');
parent.append(button);