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