// PRIMITIVE
// 7 types: String,Number,Boolean,null,undefined,Symbol,BigInt



// NON-PRIMITIVE
//Reference => Array,Objects,Functions

const heros = ["shaktiman","doga"]
let myObj={
    name:"Pratyush",
    age:21
}

const myFunction= function(){
    // console.log("Hello World!");
    
}


//Stack memory mai Primitive use hota h..
//for heap -> Non-Primitive..

let myYoutubeName = "hiteshchoudhary.com"
let anotherName = myYoutubeName
anotherName = "chaiaurcode"

// console.log(anotherName);
// console.log(myYoutubeName);

let user_1 = {
    email: "yush@gmail.com",
    upi:"yush@ybl"
}

let user_2 = user_1

user_2.email = "hitesh@gmail.com"

console.log(user_1.email);
console.log(user_2.email);

