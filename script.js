'use strict';

let highestScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = '🛑No Number!';
    displayMessage('🛑No Number!');
  }
  //When player wins
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    //document.querySelector('.message').textContent = '🎉Correct Number!';
    displayMessage('🎉Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highestScore) {
      highestScore = score;
      document.querySelector('.highscore').textContent = highestScore;
    }
  }
  //When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '📈Too High!' : '📉Too low!';
      displayMessage(guess > secretNumber ? '📈Too High!' : '📉Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent =
      //     '💥You have lost the game!';
      displayMessage('💥You have lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
