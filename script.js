'use strict';

let num = Math.trunc(Math.random() * 20) + 1;
let Score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (Score >= 1) {
    if (!guess) {
      document.querySelector('.message').textContent =
        '🛑 Please enter a valid number';
    } else if (guess === num) {
      document.querySelector('.message').textContent =
        '🏆 Congratulations you won.';
      document.querySelector('.number').textContent = num;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.highscore').textContent = Score;
      if (highscore < Score) {
        highscore = Score;
        document.querySelector('.highscore').textContent = Score;
      }
    } else if (guess > num) {
      document.querySelector('.message').textContent =
        '📈 Your guess is Too high';
      Score--;
      document.querySelector('.score').textContent = Score;
    } else if (guess < num) {
      document.querySelector('.message').textContent =
        '📉 Your guess is Too Low';
      Score--;
      document.querySelector('.score').textContent = Score;
    }
  }
  if (Score <= 0) {
    document.querySelector('body').style.backgroundColor = '#FF0000';
    document.querySelector('.message').textContent = '😫 You Lose';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  Score = 20;
  num = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = Score;
  //document.querySelector('.highscore').textContent = 0;
  document.querySelector('.guess').textContent = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;

//   // document.querySelector('.message').textContent = 'Start guessing...';
//   displayMessage('Start guessing...');
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';

//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });

// document.querySelector('.again').addEventListener('click', function () {
//   Score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;

//   // document.querySelector('.message').textContent = 'Start guessing...';
//   displayMessage('Start guessing...');
//   document.querySelector('.score').textContent = Score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';

//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });
