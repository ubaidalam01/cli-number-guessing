#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate number
// 2) User input for guessing number
// 3) Compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessednumber",
        type: "number",
        message: "Please guess a number between (1-6): ",
    }
]);
if (answer.userGuessednumber === randomNumber) {
    console.log("Congratulations! Your guess was correct");
}
else {
    console.log("You guessed the wrong number");
}
