const marvel_heroes = ["Thor", "Ironman", "Spiderman"];
const DC_heroes = ["Superman", "Flash", "Batman"];

// console.log(marvel_heroes.push(DC_heroes));
// console.log(DC_heroes);
// console.log(marvel_heroes);//merges array in an array

//concat returns a new array
// console.log(marvel_heroes.concat(DC_heroes));
// console.log(marvel_heroes);

//"..." is a spread operator...Remember like breaking a glass
const all_new_heros = [...marvel_heroes, ...DC_heroes]
console.log(all_new_heros);


//flat() takes all the sub-arrays of the array and gives a single array output 
const another_array = [1, 2, 3, [4, 5, 6],[7,8,[9,10]]]
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


// checking and converting to array

console.log(Array.isArray("Pratyush"));
console.log(Array.from("Pratyush"));

console.log(Array.from({name: "Pratyush"}));//interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
