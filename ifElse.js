// let weather = 'Sunny';

// if (weather == 'Sunny'){
//     console.log('The weather is sunny.');
// } else if (weather == 'Rainy'){
//     console.log('Get your umbrella.');
// } else {
//     console.log('Hmm, it could be eather way.');
// }

// // Activity1
// let age = "28";
// let country = "UK"

// if (age >= 17 && country == "UK"){
//     console.log("Yes, I can serve you.");
// }else {
//     console.log("You aren't old enough.");
// }

// // Activity2
// let topping = "Onion"

// switch (topping){
//     case "Pepperoni":
//     case "Onion":
//     case "Peppers":
//         console.log("These are important ingridients for my pizza.");
//         console.log(`I don't mind having ${topping} on my pizza.`);
//         break;
//     case "Corn":
//         console.log(`${topping} shouldn't be on my pizza.`);
//         break;
//     default:
//         console.log("Undifiend item.");  
// }

// // Activity3
// let password = "12345678";
// let num = "5";

// if (password.length < 8){
//     console.log("The password is too short.");
// }else {
//     console.log(`${password}`);
// }

// if (num % 3 == 0 || num % 5 == 0){
//     console.log("This number is divisible by 3 or 5.");
// }else {
//     console.log("Sorry, your number is not divisible by 3 or 5.");
// }

// // Activity4
// let num = 17;
// if (num % 3 == 0 && num % 5 == 0){
//     console.log("fizz buzz");
// }else if (num % 3 == 0){
//     console.log("fizz");
// }else if (num % 5 == 0){
//     console.log("buzz");
// }else {
//     console.log(`${num}`);
// }

// // Activity5
// let num = "20202";
// let numReverse = num.split("").reverse().join("");

// if (num === numReverse){
//     console.log("It is a palindrome.");
// }else {
//     console.log("It is not a palindrome.");
// }

// // Activity6
// let time = "9";
// let placeOfWork = "9";
// let townOfHome = "10";

// if (time == placeOfWork){
//     console.log("I'm at work.");
// }else if ( time == townOfHome){
//     console.log("I'm at home.");
// }else {
//     console.log("I'm not at home or at work.")
// }

// // Activity7
// function endVowel(x){
//     const match = x.match(/[aeiou](?!.*[aeiou])/i);
//     return match ? match[0] : 'No match';
//  }
// console.log("The last vowel is "+ endVowel("jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi")+".");

// // Activity8
// let word = "Radiator";
// let firstChar = word.charAt(0);
// let lastChar = word.charAt(word.length-1);


// if (firstChar.toLowerCase() == lastChar.toLowerCase()){
//     console.log("True");
// }else {
//     console.log("False");
// }

// Activity9
let num1 = 2;
let num2 = 21;
let num3 = num1 + num2;

if (num3 % 2 != 1){
    console.log(`${num3}`);
} else {
    console.log(`${num1 * num2}`);
}
