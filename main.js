#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000;
let myPin = 4455;
//Print welcome message
console.log("\n\t\t\t<<<<==========================>>>>");
console.log(chalk.bold.rgb(255, 255, 0)("\t\t<<==========>> Welcome to Umama Shah ATM machine <<==========>>"));
console.log("\t\t\t <<<<==========================>>>>");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.bold.magentaBright("Enter your pin"),
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.bold.green("Your pin is Correct"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.bold.rgb(255, 128, 0)("Please select option "),
            type: "list",
            choices: ["withdraw", "Fast cash", "check balance"],
        }
    ]);
    // If user select withdraw
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: chalk.bold.rgb(0, 255, 255)("Enter your amount"),
                type: "number",
            }
        ]);
        if (amountAns.amount <= myBalance) {
            let balance = myBalance - amountAns.amount;
            console.log(chalk.bold.green(`your remaining balance is ${balance}`));
        }
        else {
            console.log(chalk.bold.red(chalk.bold.red(`You have Insufficient balance`)));
        }
    }
    //if user select fast cash
    else if (operationAns.operation === "Fast cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                choices: ["1000", "3000", "5000", "10000"]
            }
        ]);
        if (fastCashAns.amount <= myBalance) {
            let balance2 = myBalance - fastCashAns.amount;
            console.log(chalk.bold.green(`the remaining balance is ${balance2}`));
        }
        else {
            console.log(chalk.bold.red(`You have Insufficient amount `));
        }
    }
    //if user select check balance
    else if (operationAns.operation === "check balance") {
        console.log(myBalance);
    }
}
else {
    console.log(chalk.bold.red(`Your pin is wrong`));
}
;
console.log(chalk.bold.yellow("\n====== THANK YOU ======="));
