//singleton

//object literals
// object.create

// SYMBOLS DATATYPE
const mySym = Symbol("key1");
const JS_user = {
  name: "Pratyush", //key is taken by the compiler as a string... 
  [mySym]: "&",
  age: 21,
  location: "Jaipur",
  email: "pratyushpanda881@gmail.com",
  isLoggedIn: false
};

// console.log(JS_user["email"]); // write it as a string ("email")
// console.log("hello");

// Object.freeze(JS_user); //Ye krne k baad sab changes freeze ho jayegaa

// console.log(JS_user);

JS_user.greeting = function(){
  console.log("Hello Js user");
  
}

JS_user.greeting2 = function(){
  console.log(`Hello Js user,${this.name}`);
  
}//this. use krne se hame objects k andar k maal kaa access mil jaaega...same object ko referece krna hai isme..


console.log(JS_user.greeting());
console.log(JS_user.greeting2());

