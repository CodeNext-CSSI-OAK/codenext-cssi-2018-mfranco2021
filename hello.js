// Author: MOnserrac Franco

let readline = require('readline-sync');


let age = Number(readline.question(' What is your age? '));

//let ageString = readline.question('What is your age');
//let age = Number(ageAsString);

console.log('In 2028 you will be ' + (age + 10)+ ' years old ');
