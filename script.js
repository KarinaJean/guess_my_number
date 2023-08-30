'use strict';

const input = document.querySelector('input'),
  guess = document.querySelector('.guess'),
  checkButton = document.querySelector('button'),
  remainPoints = document.querySelector('.chances'),
  score = document.querySelector('.label-score'),
  header = document.querySelector('header');

let secretNumber = document.querySelector('.secretNumbers');

input.focus();

let randomNumber = Math.floor(Math.random() * 20) + 1;
let chance = 10;

checkButton.addEventListener('click', function () {
  chance--;

  let inputValue = input.value;

  if (!inputValue) {
    [guess.textContent, remainPoints.textContent, header.textContent] = [
      'No number entered!',
      chance,
      '',
    ];

    document.querySelector('#noFace').style.display = 'block';
    document.querySelector('#winkFace').style.display = 'none';
    document.querySelector('#sadFace').style.display = 'none';
    document.querySelector('#tooHigh').style.display = 'none';
    document.querySelector('#invalid').style.display = 'none';
    document.querySelector('#cryFace').style.display = 'none';

    guess.style.color = '#BB2525';
  } else if (inputValue == randomNumber) {
    [
      guess.textContent,
      input.disabled,
      remainPoints.textContent,
      header.textContent,
    ] = ['You guess the number!', true, chance, ''];

    document.querySelector('#winkFace').style.display = 'block';
    document.querySelector('#noFace').style.display = 'none';
    document.querySelector('#sadFace').style.display = 'none';
    document.querySelector('#tooHigh').style.display = 'none';
    document.querySelector('#invalid').style.display = 'none';
    document.querySelector('#cryFace').style.display = 'none';

    guess.style.color = '#116a7b';

    [checkButton.textContent, input.disabled, inputValue] = [
      'Replay',
      true,
      '',
    ];

    checkButton.addEventListener('click', function () {
      window.location.reload();
    });
  } else if (inputValue > randomNumber && inputValue < 21) {
    [guess.textContent, remainPoints.textContent, header.textContent] = [
      'Your guess is too high!',
      chance,
      '',
    ];

    document.querySelector('#tooHigh').style.display = 'block';
    document.querySelector('#winkFace').style.display = 'none';
    document.querySelector('#noFace').style.display = 'none';
    document.querySelector('#sadFace').style.display = 'none';
    document.querySelector('#invalid').style.display = 'none';
    document.querySelector('#cryFace').style.display = 'none';

    guess.style.color = '#BB2525';
  } else if (inputValue < randomNumber && inputValue > 0) {
    [guess.textContent, remainPoints.textContent, header.textContent] = [
      'Your guess is to low!',
      chance,
      '',
    ];

    document.querySelector('#sadFace').style.display = 'block';
    document.querySelector('#winkFace').style.display = 'none';
    document.querySelector('#noFace').style.display = 'none';
    document.querySelector('#tooHigh').style.display = 'none';
    document.querySelector('#invalid').style.display = 'none';
    document.querySelector('#cryFace').style.display = 'none';

    guess.style.color = '#BB2525';
  } else {
    [guess.textContent, remainPoints.textContent, header.textContent] = [
      'Your number is invalid!',
      chance,
      'You need to enter number between 1 to 20!',
    ];

    document.querySelector('#sadFace').style.display = 'none';
    document.querySelector('#winkFace').style.display = 'none';
    document.querySelector('#noFace').style.display = 'none';
    document.querySelector('#tooHigh').style.display = 'none';
    document.querySelector('#invalid').style.display = 'block';
    document.querySelector('#cryFace').style.display = 'none';

    guess.style.color = '#BB2525';
  }
  if (chance == 0) {
    [
      checkButton.textContent,
      input.disabled,
      inputValue,
      remainPoints.textContent,
    ] = ['Replay', true, '', 0];
    [guess.textContent, guess.style.color] = ['You lost the game!', '#DE0611'];

    document.querySelector('#sadFace').style.display = 'none';
    document.querySelector('#winkFace').style.display = 'none';
    document.querySelector('#noFace').style.display = 'none';
    document.querySelector('#tooHigh').style.display = 'none';
    document.querySelector('#invalid').style.display = 'none';
    document.querySelector('#cryFace').style.display = 'block';

    checkButton.addEventListener('click', function () {
      window.location.reload();
    });
  }
  if (chance < 0) {
    window.location.reload();
  }
});
