let inp = document.querySelector('.current');
let out = document.querySelector('.result');
let buttons = document.querySelectorAll('button');

buttons.forEach(key => {
  key.addEventListener('click', calculate);
});
function calculate() {
  let buttonText = this.innerText;

  if (buttonText == 'AC') {
    inp.innerHTML = '';
    out.innerHTML = '0';
    return;
  }

  if (buttonText == 'Del') {
    inp.textContent = inp.textContent.slice(0, -1);
    return;
  }

  if (buttonText == '=') {
    out.innerText = eval(inp.innerText);
  } else {
    inp.textContent += buttonText;
    return;
  }
}
