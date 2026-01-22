// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sush"
tinderUser.isLoggedIn = "False"

// console.log(tinderUser);

const regularUser = {
    email: "pratyushpanda881@gmail.com",
    fullname: {
        userFullName:{
            firstname: "Pratyush",
            lastname: "Panda"
        }
    }
}
// console.log(regularUser.fullname.userFullName);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}

//TECHNIQUE 1
const obj3 = Object.assign(obj1,obj2)//its a static method that copies all the enumerable properties from all the objects...Object.assign(target,source)...we usually take an empty object as target.....

//TECHNQUE 2

const obj4 = {...obj1, ...obj2}//Spread is used in this technique
// console.log(obj4);

//ARRAY OF OBJECTS

users = [
    {
        id: 1,
        email:"pratyush@gmail.com"
    },
    {
        id: 2,
        email:"sush@gmail.com"
    },
    {
        id: 3,
        email:"panda@gmail.com"
    }
]
console.log(users[0].id);
//console.log(tinderUser);

console.log(Object.keys(tinderUser));//Gives the output in the form of arrays..

//AGAR HAME CHK KRNA HO KI KOI V PROPERTY EXIST KRTI H YAA NAHI TO WE CAN USE...
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "JsHindi",
    price: "999",
    courseInstructor: "hitesh"
}
//course.courseInstructor

//to access the value of a particular key we can use ...DESTRUCTURING

const {courseInstructor: instructor} = course
console.log(instructor);


//below object k format m apis hume milte hain jisko hum JSON kehte hain..
// {
//     "name": "hitesh",
//     "coursename": "JsHindi",
//     "price": "Free"
// }

//APIS are also stored in the manner of arrays as well
[
    {},
    {},
    {}
]