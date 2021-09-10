'use strict';
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const active = document.querySelector('.player--active');
const score0 = document.getElementById('score--0');
const current0 = document.querySelector('#current--0');
const score1 = document.querySelector('#score--1');
const current1 = document.querySelector('#current--1');

const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const all = document.querySelectorAll('.player');
console.log(all);
let cur = 0;
let score_0 = 0;
let score_1 = 0;
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');
let work = true;
let numGenerator = Math.trunc(Math.random() * 6) + 1;

const newfunc = function (play1, player0, player1) {
  if (numGenerator === 1) {
    dice.src = 'dice-1.png';
    dice.classList.remove('hidden');
    cur = 0;
    document.querySelector(`#current--${play1}`).textContent = '0';
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
  } else {
    dice.src = `dice-${numGenerator}.png`;
    cur += numGenerator;
    dice.classList.remove('hidden');
    document.querySelector(`#current--${play1}`).textContent = cur;
  }
};
rollDice.addEventListener('click', function () {
  if (work === true) {
    if (all[0].classList.contains('player--active')) {
      numGenerator = Math.trunc(Math.random() * 6) + 1;
      newfunc(0, player0, player1);
    } else if (all[1].classList.contains('player--active')) {
      numGenerator = Math.trunc(Math.random() * 6) + 1;
      newfunc(1, player1, player0);
    }
  }
});
hold.addEventListener('click', function () {
  if (all[0].classList.contains('player--active')) {
    score_0 += cur;
    score0.textContent = score_0;
    cur = 0;
    document.querySelector(`#current--0`).textContent = cur;
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
    if (Number(score0.textContent) >= 100) {
      player0.classList.add('player--winner');
      document.getElementById('name--0').textContent = 'Player 1 - Wins !!!';
      player1.classList.remove('player--active');
      work = false;
      dice.classList.add('hidden');
    }
  } else if (all[1].classList.contains('player--active')) {
    score_1 += cur;
    score1.textContent = score_1;
    cur = 0;
    document.querySelector(`#current--1`).textContent = cur;
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
    if (Number(score1.textContent) >= 100) {
      player1.classList.add('player--winner');
      document.getElementById('name--1').textContent = 'Player 2 - Wins !!!';
      player0.classList.remove('player--active');
      work = false;
      dice.classList.add('hidden');
    }
  }
});

newGame.addEventListener('click', function () {
  cur = 0;
  score_0 = 0;
  score_1 = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = '0';
  current1.textContent = '0';
  dice.classList.add('hidden');
  numGenerator = Math.trunc(Math.random() * 6) + 1;
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  work = true;
  player1.classList.remove('player--winner');
  player0.classList.remove('player--winner');
  document.getElementById('name--0').textContent = 'Player 1';
  document.getElementById('name--1').textContent = 'Player 2';
});
