import inquirer from "inquirer";

const currency:any = {
    USD: 1,
    EUR: 0.92,
    INR: 83.46,
    PKR: 278.1,
    AUD: 1.5,
    SAR: 3.75,
};

let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "INR", "PKR", "AUD", "SAR"],
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "EUR", "INR", "PKR", "AUD", "SAR"],
    },
    {
        name: "amount",
        message: "Enter tour amount to convert",
        type: "number",
    },
]);

let fromAmount = currency[userAnswer.from]
let toAmount = currency[userAnswer.to]
let amount = userAnswer.amount

let baseAmount = amount / fromAmount
let convetedAmount = baseAmount * toAmount

console.log(convetedAmount.toFixed(4))