//ARRAYS
 const myArr = [1 , 2 , 3 , 4 , 5];
 console.log(myArr[0]);

 //Arrays Methods

myArr.push(6);
console.log(myArr);
myArr.push(7);
console.log(myArr);
myArr.pop()//removes last element

myArr.unshift(9)//Adds the element at the very start and shift all the elements in the array
myArr.shift();
console.log(myArr);

//Searching
console.log(myArr.includes(9));//boolean
console.log(myArr.indexOf(9));//-1 matlab nahi pataa..lol

const newArray = myArr.join()
console.log(myArr);
console.log(newArray);

//slice and splice
console.log("A ",myArr);

const myn = myArr.slice(1,3);//end not included
console.log(myn);
console.log("B ",myArr);

const myn1 = myArr.splice(1,3)
console.log("C ",myArr);//splice manipulates the original array
console.log(myn1);







 