'use strict';

var userName = prompt('What is your name?');
console.log(userName + ' this is the answer to what is your name');
alert('It\'s a pleasure to meet you ' + userName);

var codeQuestion = prompt('Do you know how to use Javascript?').toLowerCase();
console.log('This is the answer to do you know how to use Javascript ' + codeQuestion);

if(codeQuestion === 'yes'){
  alert(userName + ' Will you teach me?');
}
else if(codeQuestion === 'no'){
  alert(userName + ' I don\'t either, but we\'ll be masters soon enough.');
} else {
  alert(userName + ' Ah, ah, ah, you didn\'t say the magic word!');
}
