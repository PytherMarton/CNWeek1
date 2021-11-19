// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever is new."
// ];

// console.log(coffeeOrder[2]);
// coffeeOrder[1] = "Ann - Vanilla latte";
// coffeeOrder.push("Donna - Espresso");
// console.log(coffeeOrder);

// let favSongs = [
//     "Peter - Hello",
//     "Peter - Bye",
//     "Peter - Good Monring"
// ];

// console.log(favSongs);

// let favDrinks = [
//     "Water",
//     "Beer",
//     "Tea"
// ];

// for(let i = 0; i < favDrinks.length; i++){
//     console.log(favDrinks[i]);
// }

// // Acitivity1
// let favFilms = [
//     "Avatar",
//     "Titanic",
//     "Tom & Jerry",
//     "Rocky",
//     "Inception"
// ];

// favFilms.push("Future");
// favFilms.unshift("Past");
// favFilms.pop();
// for (let i = 0; i < favFilms.length; i++){
//     console.log(favFilms[i]);
// }

// // Acitivity2
// for (i = 0; i < 6; i++){
//     console.log(Math.floor(Math.random()*50));
// }

// // Acitivity3
// for (let i = 9; i >= 0; i--){
//     console.log(i);
// }

// // Acitivity4
// let films = [
//     "Avatar",
//     "Titanic",
//     "Ghostbuster",
//     "Rocky"
// ];

// for (i = 0; i < films.length; i++){
//     if (films[2] === "Ghostbuster"){
//         console.log("Yay it's Ghostbusters.");
//         break
//     }else {
//         console.log("Boo! We want Ghostbusters!");
//         break
//     }
// }

// // Acitivity5
// for (i = 0; i < 6; i++){
//     let num = Math.floor(Math.random()*30);
//     console.log(num);
//     if (num % 7 == 0 && num != 0){
//         console.log("This number is divisible by 7.");
//     }else {
//         console.log("This number is NOT divisible by 7.");
//     }
// }

// // Acitivity6
// let bobsFollowers = [
//     "John",
//     "Peter",
//     "Chris",
//     "Suzy",
// ];

// let hannahsFollowers = [
//     "Cleopatra",
//     "Danielle",
//     "Peter",
//     "Suzy",
// ];


// let mutualFollowers = [];
// for (let i = 0; i < bobsFollowers.length; i++) {
//     for (let j = 0; j < hannahsFollowers.length; j++) {
//       if (bobsFollowers[i] === hannahsFollowers[j]) {
//         mutualFollowers.push(bobsFollowers[i]);
//         console.log(bobsFollowers[i]);
//       }
//     }
// };

// Acitivity7
let text = "Hello World!"
let i = 0;

do {
    console.log(text);
    i++;
}while (i < 5);
