#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    { message: "Select one of operater to perfome action", type: "list", name: "operater", choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"], },
]);
if (answer.operater === "ADDITION") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operater === "SUBTRACTION") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operater === "MULTIPLICATION") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operater === "DIVISION") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    "please select correct operater";
}
