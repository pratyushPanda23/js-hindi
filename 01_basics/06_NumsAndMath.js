const score = 400;
console.log(score);

const balance = new Number(100) //we will say ki ye number hin hoga...it is of object type

console.log(balance);
console.log(balance.toString().length);//ab ye string ban gaya to hum string k features use kar sakte hn

console.log(balance.toFixed(2));//Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.

//ROUND OFF FUNCTION

const x = 112.8899;
console.log(x.toPrecision(3));

const hundred = 1000000;
console.log(hundred.toLocaleString('en-IN'));//ye comma aga k define kar degaa


// *********MATHS********

// console.log(Math);
// console.log(Math.min(67,98));
// console.log(Math.abs(-67,-98));
// console.log(Math.floor(4.2));
// console.log(Math.ceil(4.2));
// console.log(Math.round(4.9));

//gives values between 0 and 1;
console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);//decimal between 1 and 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
