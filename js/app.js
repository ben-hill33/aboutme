'use strict';

var correctCounter = 0;

function userNameQuestion() {
  var userName = prompt('What is your name?');
  console.log(userName + ' this is the answer to what is your name');
  return userName;
}
var userName = userNameQuestion();

//Q1
function askCodeQuestion() {
  var codeQuestion = prompt('Do you know how to use Javascript?').toLowerCase();
  console.log('This is the answer to do you know how to use Javascript ' + codeQuestion);
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


//Q2
function determined() {
  var determined = prompt('Are you determined to learn JS ' + userName + '?').toLowerCase();
  //console.log('This is the answer to are you determined to learn JS ' + determined);
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

// // Q3
// var uncomfortable = prompt('Are you uncomfortable yet?').toLowerCase();
// //console.log('This is the answer to are you uncomfortable yet ' + uncomfortable);
// alert('Embrace the suck, buttercup!');

// if(uncomfortable === 'yes' || uncomfortable === 'y'){
//   alert('This is your new comfortable ' + userName + '!');
//   correctCounter++;

// }
// else if(uncomfortable === 'no' || uncomfortable === 'n'){
//   alert('Yes you are ' + userName);
// } else {
//   alert('That was a yes or no question, dude');
// }
// //Q4
// var areAfraid = prompt('Are you afraid?').toLowerCase();
// //console.log('this is the answer to are you afraid ' + areAfraid);
// alert('You must unlearn, what you have learned');

// if(areAfraid === 'yes' || areAfraid === 'y'){
//   alert('Fear is the path to the dark side ' + userName);
//   correctCounter++;

// }
// else if(areAfraid === 'no' || areAfraid === 'n'){
//   alert('You will be ' + userName);
// } else {
//   alert('Do or do not, there is no try');
// }
// //Q5
// var youReady = prompt(userName + ' are you ready for the next chapter in your life?').toLowerCase();
// // console.log('this is the answer to are you ready for the next chapter in your life ' + youReady);
// alert('This is the way ' + userName);

// if(youReady === 'yes' || youReady === 'y'){
//   alert('That\'s what I\'m talkin about ' + userName);
//   correctCounter++;

// }
// else if(youReady === 'no' || youReady === 'n'){
//   alert('Time to find some ambition ' + userName);
// } else {
//   alert('There\'s no way you will fail');
// }

// // Q6 (Lab 3)
// // Guess a number
// var answerPets = 5;//Correct answer
// var guessPets = parseInt(prompt(userName + ' How many pets do you think I have?'));
// // parseInt found in Google search. parseInt() function parses a string argument and returns an integer of specified radix (the base in mathematical numeral systems). 
// console.log('this is the answer to how many pets do you think i have ' + guessPets);


// for (var i = 0; i < 4; i++){
//   if(guessPets === answerPets){//parseInt used so the correct answer could be considered correct since guessPets is a string and the answer is a number. 
//     alert('That\'s correct ' + userName + '! Congratulations!');
//     correctCounter++;
//     break;
//   } else if((guessPets < answerPets) && i < 3){
//     guessPets = parseInt(prompt('Too low! You have ' + (3 - i) + ' lives left'));
//   } else if((guessPets > answerPets)){
//     guessPets = parseInt(prompt('Too high! Guess again ' + (3 - i) + ' lives left'));
//   } else {
//     alert('Nope, sorry ' + userName + '! The correct answer is 5');
//     i = 5;
//   }

// }


// // Array Question 7

// var aboutArray = ['eugene','interstellar'];

// console.log('this is the answer to my question ' + askQuestion);

// console.log(aboutArray);

// for(var attempts = 0; attempts < 6; attempts++){

//   var askQuestion = prompt('Looking at my page, can you guess where I was born or name the last movie on my top 10 list? You have six tries, GO!');
//   for(i = 0; i < aboutArray.length; i++){
//     if(askQuestion === aboutArray[i]){
//       alert('Correct ' + userName + '! Nice work!');
//       correctCounter++;
//       attempts = 6;
//       break;
//     }
//   }
//   alert('Incorrect');

// }
// if(attempts === 6){
//   alert('Incorrect, the correct answers are either eugene or insterstellar.');
// }
// alert('Your correct answers are ' + correctCounter);
