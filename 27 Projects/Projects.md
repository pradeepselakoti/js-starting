# Projects related to DOM

## project link
[click here]

# solution code

## project 1

```javascript

console.log('pradeep')

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```

## Project 2

```
const form = document.querySelector('form');

//  this usecase will give you empty
//   const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //  show the result
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      results.innerHTML = 'Under Weight';
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerTextContent = 'Normal Weight';
    } else {
      results.textContent = 'Over Weight';
    }
  }
});

```
## 3 Project

```
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

## Project 4 

```
let randomNumber = parseInt(Math.random() * 10 + 1);
const Submit = document.querySelector('#subt');
const UserInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  Submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(UserInput.value);
    validateGuess(guess);
    console.log(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Please enter a valid number`);
  } else if (guess < 1) {
    alert(`Please enter a  number more then 1`);
  } else if (guess > 100) {
    alert(`Please enter a number lesss then 100`);
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guesses i right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is tooo low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is tooo big`);
  }
}

function displayGuess(guess) {
  UserInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  UserInput.value = '';
  UserInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h1 id="newGamw>Start new Game </h1>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 10 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess}`;
    UserInput.removeAttribute('disabled');
    startOver.removeChild(P);
    playGame = true;
  });
}



```

## Project 5

```

const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  
  <div class= 'color>
  <table>
  <tr>
      <th>Key</th>
      <th>KeyCode</th>
      <th>Code</th>
  </tr>
  <tr>
      <td>${e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>

  </table>
    </div>
    `;
});


```