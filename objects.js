// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappucino",
//         "Latte",
//         "Filter coffee",
//         "Tea",
//         "Hot chocolate"
//     ]
// };

// const person = {
//     name: "Peter",
//     age: "28"
// };

// console.log(person.name);

// let offer = "none";
// let time = 1600;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks : [
//         "Cappucino",
//         "Latte",
//         "Filter coffee",
//         "Tea",
//         "Hot chocolate"
//     ],
//     breakafastOffer: "Free croissant with coffee.",
//     lunchOffer: " Free drink with suprisingly priced sandwich.",
//     noOffer: "Sorry no offer.",

//     openCafe(){
//         if(this.hasSpecialOffers){
//             return "Time for a special offer!";
//         }
//     },
//     closeCafe(){
//         return "We are closed, come back tomorrow!";
//     }

// };

// console.log(cafe.openCafe());

// if (time < 1100){
//     offer = cafe.breakafastOffer;
//     console.log(offer);
// } else if (time < 1500) {
//     offer = cafe.lunchOffer;
//     console.log(offer);
// } else {
//     offer = cafe.noOffer;
//     console.log(offer);
// }

// // Activity
// let day = "Sunday";
// let alarm = "";
// const alarms = {
//     weekendAlarm : "No alarm needed",
//     weekdayAlarm: "Get up at 7am"
// };

// if (day != "Saturday" && day != "Sunday"){
//     alarm = console.log(alarms.weekdayAlarm);
// } else {
//     alarm = console.log(alarms.weekendAlarm);
// }

// // Acticity1
// const person = {
//     name: "Peter",
//     age: "28",
//     sayHi(){
//         return `Hello my name is ${this.name}.`;
//     }
// };

// console.log(person.sayHi());

// // Activity2
// const pet = {
//     name: "Alfie",
//     typeOfPet: "Dog",
//     age: "3",
//     colour: "brown"
// };

// let eat = `Your ${pet.typeOfPet}, ${pet.name}is eating.`;
// let drink = `Your ${pet.typeOfPet}, ${pet.name}is drinking.`;
// console.log(eat, drink);

// Activity3
const coffeeShop = {
    branch: "Peters shop",
    drinks :[
        "Coffee",
        2,
        "Tea",
        4,
        "Hotchoc",
        "6"  
    ],
    food : [
        "Muffin",
        1,
        "Apple",
        3,
        "Sandwich",
        5
    ]
};

let drinksOrdered = `Your drink order is ${coffeeShop.drinks[0]}. It costs £${coffeeShop.drinks[1]}.`;
let foodOrdered = `Your food order is ${coffeeShop.food[0]}. It costs £${coffeeShop.food[1]}.`;

console.log(drinksOrdered);
console.log(foodOrdered);
console.log(`Total cost for your meal is £${coffeeShop.drinks[1] + coffeeShop.food[1]}.`);

