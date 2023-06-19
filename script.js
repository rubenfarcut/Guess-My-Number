'use strict';
// document.querySelector('.message').textContent = '🥳 Correct number! ';
// document.querySelector('.number');
// document.querySelector('.score');
// console.log(document.querySelector('.guess').value);
const displayMessage = message =>
  (document.querySelector('.message').textContent = message);
const generateNumber = () =>
  Number(((Number(Math.random() * 100) % 20) + 1).toFixed(0));
displayMessage('💫 Start guessing...');

//generate a number between 1 and 20
let numberRandom = generateNumber();

//button event
document.querySelector('.check').addEventListener('click', x => {
  const numberInput = Number(document.querySelector('.guess').value);

  //When there input is wrong
  if (!numberInput || numberInput > 20 || numberInput < 1) {
    displayMessage(
      !numberInput
        ? '🤦‍♂️ No number!'
        : numberInput > 20
        ? '🚫 Number is more hight!'
        : '🚫 Number is more low!'
    );
    return 0;
  }
  //When input is not equal with randomValue
  if (numberInput !== numberRandom) {
    displayMessage(
      numberInput < numberRandom ? '📉 Too low!' : '📈 Too hight!'
    );
    document.querySelector('.score').textContent =
      Number(document.querySelector('.score').textContent) - 1;
  }
  //When input is equal with number generate random
  else {
    displayMessage('🥳 Is perfect!');
    document.querySelector('.number').textContent = numberInput;
    document.querySelector('body').style.backgroundColor = 'green';
    //When score is > hightscore
    if (
      Number(document.querySelector('.highscore').textContent) <
      Number(document.querySelector('.score').textContent)
    )
      document.querySelector('.highscore').textContent =
        document.querySelector('.score').textContent;
    document.querySelector('.check').style.pointerEvents = 'none';
  }
  //When score is equal with 0
  if (Number(document.querySelector('.score').textContent) === 0) {
    displayMessage('🥹 You lose GAME!');
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.check').style.pointerEvents = 'none';
  }
});

//Again button - reset all needs value to default
document.querySelector('.again').addEventListener('click', function () {
  displayMessage('💫 Start guessing...');
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  numberRandom = generateNumber();
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.check').style.pointerEvents = 'auto';
});
