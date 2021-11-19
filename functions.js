// JavaScript a function allows you to define a block of code, give it a name and then execute it as many times as you want. A function can be defined using function keyword and can be executed using () operator. A function can include one or more parameters.

// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding){
//         console.log("Stopping the grind.");
//         coffeeIsGrinding = false;
//     } else {
//         console.log("Grinding is about to begin.");
//         coffeeIsGrinding = true;
//     }
// }

// pressGrindBeans();
// pressGrindBeans();
// pressGrindBeans();

// let accnumber = 12345678;

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
// }

// cashWithdrawal(300, accnumber);
// cashWithdrawal(200, 22334455);
// cashWithdrawal(100, 33445566);

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// addUp(7,3);
// console.log(addUp(2,5));

// function square(number){
//     return number * number;
// }

// console.log(square(5));

// // Acitivity1
// const factorial = (n) => {
//     if ((n === 0) || (n === 1)){
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(33));

// Acitivity2
// let orderCount = 0;

// const takeOrder = (topping, topping2) => {
//     console.log(`Pizza with ${topping} and with ${topping2} please.`);
//     orderCount++;
//     console.log(`We have ${orderCount} new orders.`);
// }

// takeOrder("Pineapple", "Cheese");
// takeOrder("Sausage", "Tuna");

// Acitivity3
const pinCode = 12345678;
let accountBalance = 1000;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

function cashMachine() {
    readline.question("Please enter your pin number: ", pin => {
        if (pin == pinCode){
            console.log("Your pin is correct.");
            readline.question("Enter the amount you wish to withdraw: ", balance => {
                if (balance <= accountBalance){
                    console.log("Your withdrawal is beeing processed.");
                    console.log(`Your new balance is ${accountBalance - balance}.`);
                    readline.close();
                } else {
                    console.log("Your balance is insufficinet, we couldn't complete your transaction.");
                    tryAgainWithdrawal();
                }
            });
        } else {
            console.log("Your pin is incorrect!");
            console.log("Please try again!");
            cashMachine();
        }
    });
}

function tryAgainWithdrawal(){
    readline.question("Please enter another amount that you wish to withdraw: ", balance => {
        if (balance <= accountBalance){
            console.log("Your withdrawal is beeing processed.");
            console.log(`Your new balance is ${accountBalance - balance}.`);
            readline.close();
        } else {
            console.log("Your balance is insufficinet, we couldn't complete your transaction.");
            tryAgainWithdrawal();
        }
    });
}

cashMachine();