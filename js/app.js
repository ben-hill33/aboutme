'use strict';

var correctCounter = 0;

function userNameQuestion() {
  var userName = prompt('What is your name?');
  return userName;
}
var userName = userNameQuestion();

function askCodeQuestion() {
  var codeQuestion = prompt('Do you know how to use Javascript?').toLowerCase();
  if (codeQuestion === 'yes' || codeQuestion === 'y') {
    alert(userName + ' Will you teach me?');
    correctCounter++;
  } else if (codeQuestion === 'no' || codeQuestion === 'n') {
    alert(userName + ' I don\'t either, but we\'ll be masters soon enough.');
  } else {
    alert(userName + ' Ah, ah, ah, you didn\'t say the magic word!');
  }
}
askCodeQuestion();


function determined() {
  var determined = prompt('Are you determined to learn JS ' + userName + '?').toLowerCase();
  if (determined === 'yes' || determined === 'y') {
    alert('Stay motivated ' + userName + '!');
    correctCounter++;
  }
  else if (determined === 'no' || determined === 'n') {
    alert('You better fix your attitude and buckle up then ' + userName);
  } else {
    alert('Yes or no please');
  }
}
determined();

function uncomfortable() {
  var uncomfortable = prompt('Are you uncomfortable yet?').toLowerCase();
  if (uncomfortable === 'yes' || uncomfortable === 'y') {
    alert('This is your new comfortable ' + userName + '!');
    correctCounter++;
  } else if (uncomfortable === 'no' || uncomfortable === 'n') {
    alert('Yes you are ' + userName);
  } else {
    alert('That was a yes or no question, dude');
  }
}
uncomfortable();

function areAfraid() {
  var areAfraid = prompt('Are you afraid?').toLowerCase();
  if (areAfraid === 'yes' || areAfraid === 'y') {
    alert('Fear is the path to the dark side ' + userName);
    correctCounter++;
  } else if (areAfraid === 'no' || areAfraid === 'n') {
    alert('You will be ' + userName);
  } else {
    alert('Do or do not, there is no try');
  }
}
areAfraid();

function youReady() {
  var youReady = prompt(userName + ' are you ready for the next chapter in your life?').toLowerCase();
  if (youReady === 'yes' || youReady === 'y') {
    alert('That\'s what I\'m talkin about ' + userName);
    correctCounter++;
  } else if (youReady === 'no' || youReady === 'n') {
    alert('Time to find some ambition ' + userName);
  } else {
    alert('There\'s no way you will fail');
  }
}
youReady();

var answerPets = 5;
var guessPets = parseInt(prompt(userName + ' How many pets do you think I have?'));

function arrayGuess() {
  for (var i = 0; i < 4; i++) {
    if (guessPets === answerPets) {
      alert('That\'s correct ' + userName + '! Congratulations!');
      correctCounter++;
      break;
    } else if ((guessPets < answerPets) && i < 3) {
      guessPets = parseInt(prompt('Too low! You have ' + (3 - i) + ' lives left'));
    } else if ((guessPets > answerPets)) {
      guessPets = parseInt(prompt('Too high! Guess again ' + (3 - i) + ' lives left'));
    } else {
      alert('Nope, sorry ' + userName + '! The correct answer is 5');
      i = 5;
    }
  }
}
arrayGuess();

var aboutArray = ['eugene', 'interstellar'];

console.log(aboutArray);

function questionSeven() {
  for (var attempts = 0; attempts < 6; attempts++) {

    var askQuestion = prompt('Looking at my page, can you guess where I was born or name the last movie on my top 10 list? You have six tries, GO!');
    for (var j = 0; j < aboutArray.length; j++) {
      if (askQuestion === aboutArray[j]) {
        alert('Correct ' + userName + '! Nice work!');
        correctCounter++;
        attempts = 6;
        break;
      }
    }
    if (attempts !== 6);
    alert('Incorrect');

  }
  if (attempts === 6) {
    alert('Incorrect, the correct answers are either eugene or insterstellar.');
  }
}
questionSeven();

alert('Your correct answers are ' + correctCounter);
