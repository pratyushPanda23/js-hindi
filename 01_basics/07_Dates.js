//DATES
let myDate = new Date();//here myDate is an object...
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());

let myCreatedDate = new Date("01-07-2026")
// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myTimeStamp.toLocaleString());
// console.log(myCreatedDate.getTime());

let myCreatedDate2 = new Date("01-20-2026")
let diff = myCreatedDate2.getTime()-myCreatedDate.getTime();

let days_count = diff/(1000*60*60*24)
console.log(days_count + " days");

 