export const button = createButton();

function createButton() {
  const button = document.createElement('button');
  button.classList.add('button');
  buttonInit(button);
  return button;
}

function buttonInit(elem) {
  let value = 0;
  // elem.textContent = value;
  elem.textContent = `${value} кликов`;
  elem.addEventListener('click', () => {
    elem.textContent = `${++value} ${declOfNum(value, ['клик', 'клика', 'кликов'])}`;
  });
}

function declOfNum(number, titles) {
  let cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}
