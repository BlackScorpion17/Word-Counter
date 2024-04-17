#! /usr/bin/env node
// Import the 'inquirer' module, which is a command line interface for Node.js
import inquirer from "inquirer";
// Declare a constant 'answer' and assign it to the result of inquirer.promot function
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
const words = answers.sentence.trim().split(" ");
// Print the Array of words to the console
console.log(words);
// Print the world count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
