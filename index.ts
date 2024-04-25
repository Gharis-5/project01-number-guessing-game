#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Computer will generate a random number

// 2) User input for guessing number

// 3) Compare user input which computer generated number

const randomnumber = Math.floor(Math.random()* 10 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Plaese Guess A Number between 1-10: ",
    }
]);
if(answers.userGuessNumber === randomnumber){
    console.log("Congratulation! you guess right number . ");
}else{
    console.log("You guess wrong number");
}