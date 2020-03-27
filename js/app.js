'use strict';

var userName = prompt('What is your name?');
//console.log(userName + ' this is the answer to what is your name');
alert('It\'s a pleasure to meet you ' + userName);

var codeQuestion = prompt('Do you know how to use Javascript?').toLowerCase();
//console.log('This is the answer to do you know how to use Javascript ' + codeQuestion);
alert('Remember to use console.log in the browser to test code!');

if(codeQuestion === 'yes' || codeQuestion === 'y'){
  alert(userName + ' Will you teach me?');
}
else if(codeQuestion === 'no' || codeQuestion === 'n'){
  alert(userName + ' I don\'t either, but we\'ll be masters soon enough.');
} else {
  alert(userName + ' Ah, ah, ah, you didn\'t say the magic word!');
}

var determined = prompt('Are you determined to learn JS ' + userName + '?').toLowerCase();
//console.log('This is the answer to are you determined to learn JS ' + determined);
alert('Remember that with code, less is more');

if(determined === 'yes' || determined === 'y'){
  alert('Stay motivated ' + userName + '!');
}
else if(determined === 'no' || determined === 'n'){
  alert('You better fix your attitude and buckle up then ' + userName);
} else {
  alert('Yes or no please');
}

var uncomfortable = prompt('Are you uncomfortable yet?').toLowerCase();
//console.log('This is the answer to are you uncomfortable yet ' + uncomfortable);
alert('Embrace the suck, buttercup!');

if(uncomfortable === 'yes' || uncomfortable === 'y'){
  alert('This is your new comfortable ' + userName + '!');
}
else if(uncomfortable === 'no' || uncomfortable === 'n'){
  alert('Yes you are ' + userName);
} else {
  alert('That was a yes or no question, dude');
}

var areAfraid = prompt('Are you afraid?').toLowerCase();
//console.log('this is the answer to are you afraid ' + areAfraid);
alert('You must unlearn, what you have learned');

if(areAfraid === 'yes' || areAfraid === 'y'){
  alert('Fear is the path to the dark side ' + userName);
}
else if(areAfraid === 'no' || areAfraid === 'n'){
  alert('You will be ' + userName);
} else {
  alert('Do or do not, there is no try');
}

