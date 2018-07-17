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
  if(seeGirl == "y" || seeGirl == "yes")
  console.log ("she leads you to a hous with a red door. Tears are streaming down her face. ")
} else {
  if(seeGirl !== "y" || seeGirl !== "yes")
  console.log (" You walk away scard to see the wipping child once more and see a house near you.")
 console.log (" You begin to get near the house and all of the sudden she appear in front of you!")
  let followGirl = readline.question ("She streches out her arm will you take it. ");
  if(followGirl == "y" || followGirl == "yes")
  console.log (" You took her arm and she bit it off. You are now bleeding out. ");
} else {
    if(followGirl !== "y" || followGirl !== "yes")
    console.log("She cryed when you did not take it and ran to you face and riped out you eye balls you are now dead.")

// } else {
//     console. log("You do not follow her and you you ignor her screams. ");
//     console. log("You walk into the house in front of you prepared for anything. ")
//     console. log("When you enter the home you are greeted by a gust of cold wing")
//     let enterScaryPlace = readline.questions(" Do you walk up stairs so you are not risk seeing the crying girl agin");
//     console. log("You are now up stairs!!!! ");
//     console. log("Now you have found a unicorn. He has taken you into the sun set. ")

}
console.log("Thanks for playing!");
