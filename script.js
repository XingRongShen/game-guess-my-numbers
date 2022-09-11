'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let password = Math.trunc(Math.random() * 20);
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const gues = Number(document.querySelector('.guess').value);
  console.log(gues, typeof gues);
  if (!gues) {
    document.querySelector('.message').textContent = 'no number';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (gues === password) {
    document.querySelector('.message').textContent = 'succeed';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = password;
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // else if(gues!==password){                                                   //运送三目运算符进行代码重欧降低运算量
  //   document.querySelector('.message').textContent = gues>password?'Too high ':'Too Low';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // }
  else if (gues > password) {
    document.querySelector('.message').textContent = 'too high';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (gues < password) {
    document.querySelector('.message').textContent = 'too low';
    score--;
    document.querySelector('.score').textContent = score;
  }

  if (score <= 0) {
    score = 0;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#006611';
    document.querySelector('.message').textContent = 'You Lose The Game';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score=20;
  password = Math.trunc(Math.random() * 20);
  document.querySelector('.message').textContent = 'please guess';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#000000';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
