const name = "Hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const game = new String('Pratyush') /* in object the constructor has constructed a string.."new"is used to declare an object..*/

//STRING METHODS..
console.log(game[0]);
console.log(game.__proto__);
console.log(game.length);
console.log(game.toUpperCase);
console.log(game.charAt(2));
console.log(game.indexOf('t'));

const newString  = game.substring(0,4);//Slicing in strings
console.log(newString);

const anotherString  = game.slice(7,0)
console.log(anotherString);

const newStringOne = "   hitesh   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://pratyush.com/pratyush%20panda";

console.log(url.replace('%20','-'));//to replace

console.log(url.includes('pratyush'));//to search

//Suppose If i want to store different entities of the string based on a particular character...we can use ".split"
const gameN = new String("Pratyush_plays_23")
console.log(gameN.split('_'));








