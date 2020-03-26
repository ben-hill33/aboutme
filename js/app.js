'use strict';

var userName = prompt('What is your name?');
console.log(userName + ' this is the answer to what is your name');

var likeStarWars = prompt('Do you like Star Wars?');

// if the user answers yes, Yes, yeS, y, I want to alert
// user name and the phrase I like star wars too.

//if the user answers no I want to alert
//user name and the phrase why?

if(likeStarWars === 'yes'){
  alert(userName + ' I like Star wars too!');
}
else if(likeStarWars === 'no'){
  alert(userName + ' Why don\'t you like Star Wars? Shame ');
} else {
  alert(userName + ' You did not read the instructions very well');
}
