// let i = 10;
// i += 2;
// console.log(i);

// let favDrink = 'Water';
// console.log(favDrink);
// console.log('My favourite drink is ' + favDrink + '.');
// console.log(`My favourite drink is ${favDrink}.`);

// // Activity1
// let name = 'Peter';
// let age = '28';
// let favColour = 'Green';
// console.log(`My name is ${name}. I'm ${age} years old, and my favourite colour is ${favColour}.`);

// name = 'Chris';
// age = '27';
// favColour = 'Blue';
// console.log(`My name is ${name}. I'm ${age} years old, and my favourite colour is ${favColour}.`);

// // Activity2
// let breakfast = 'Porridge';
// let lunch = 'Pizza';
// let dinner = 'Kebab';
// console.log(`I had ${breakfast} for breakfast, ${lunch} for lunch, and ${dinner} for dinner.`);

// breakfast = 'Fruits';
// lunch = 'Steak and potatoes';
// dinner = 'Pasta';
// console.log(`For tomorrow I will have ${breakfast} for breakfast, ${lunch} for lunch, and ${dinner} for dinner.`);

// // Activity3
// function getAge(dateString) {
//     let date = dateString.split("-");
//     let newD = new Date();

//     let day = date[0];
//     let month = date[1];
//     let year = date[2];

//     let curDay = newD.getDate();
//     let curMonth = newD.getMonth()+1;
//     let curYear = newD.getFullYear();

//     let age = curYear - year;

//     if((curMonth < month) || ( (curMonth == month) && curDay < day   )){

//         age--;
//     }
//     return age;
// }

// console.log(`${getAge('29-06-1993')*365}`);

// let todayDate = Date.parse("1993-06-29");
// let birthday = Date.parse("2021-11-16");
// let difference = new Date(birthday - todayDate);
// let days = difference/1000/60/60/24;
// console.log(days);

// Activity4
let x = '    |   |   ';
let y = ' -----------';
let z = '  X | O |   ';
let a = '  X | X |   ';
let b = '  O |   |   ';

// let map=[x, z, x, y, x, a, x, y, x, b, x]
// for (let i = 0; i < map.length; i++){
//     console.log (map[i]);
// };
console.log(`${x}\n${z}\n${x}\n${y}\n${x}\n${a}\n${x}\n${y}\n${x}\n${b}\n${x}`);