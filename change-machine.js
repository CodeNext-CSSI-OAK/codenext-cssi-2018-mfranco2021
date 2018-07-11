// Author: Monserrac Franco

let readline = Number ('readline-sync');
let centAsNumber = Number(readline.question(' How many cents do you have?'));

let quarters = Math.floor(centAsNumber/25);
console.log ('quarters=' + quarters);
centAsNumber = centAsNumber - quarters * 25;

let dime = Math.floor(centAsNumber/10);
console.log ('dime=' + dime);
centAsNumbers = centAsNumber - dime * 10;

let nickel = Math.floor(centAsNumber/5);
console.log ('nickle=' + nickel);
centAsNumber = centAsNumber - nickel * 5;

let penny = Math.floor(centAsNumber/1);
console.log ('penny=' + penny);
centAsNumber = centAsNumber - penny * 1;
