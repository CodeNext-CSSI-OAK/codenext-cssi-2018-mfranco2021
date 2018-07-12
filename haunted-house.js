// Author: Monserrac Franoc
var readline = require("readline-sync");

console.log();
console.log("*****************************************************************");
console.log("                          HAUNTED HOUSE");
console.log("                 A game by Monserrac Franco");
console.log("*****************************************************************");
console.log("You are standing in front of a spooky haunted house.");
console.log("You hear what sounds like screaming coming from inside the house.");
let enterHouse = readline.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  console.log ("see a girl. ");
  console.log ("The girl begins to walks away. ");
  let seeGirl = readline.question(" Will you folow here. ");
  let folowsGirl = readline.question (" She streches out her arm will you take it. ");
  console.log (" You took her arm and she bit it off. You are now bleeding out. ");

} else {
    console. log("You do not follow her and you you ignor her screams. ");
    console. log(" You walk into the house in front of you prepared for anything. ")
    console. log(" When you enter the home you are greeted by a gust of cold wing")
    let enterScaryPlace = readline.questions(" Do you walk up stairs so you are not risk seeing the crying girl agin");
    console. log(" You are now up stairs!!!! ");
    console. log()

}
console.log("Thanks for playing!");
