// 14.5-Array.js

// Store more than one value in a variable using Array
//----------------------------------------------------
const numbers = [10, 20, 30, 40];
const friends = ["Anon", "Sakib", "Munna", "Miraj"];
const passed = [true, false, true, true];


// Array length, index, Get and set by index
//----------------------------------------------------
// length
const num = [10, 20, 30, 40];
// console.log(num.length);


// index
const n = [88, 70, 37, 40, 59, 75];
// console.log(n);
// console.log(n[2]);

// get element value by index
const fourth = n[3];
// console.log(fourth);

//set or update element value by index
n[1] = 34;
// console.log(n);


// Add/remove elements from arrays using push, pop shift & unshift
// ---------------------------------------------------------------
// push
const number = [5, 10, 15, 20, 25, 30, 35];
// console.log(number);
number.push(55);
number.push(90);
number.push(101, 150, 140);
// console.log(number);

// pop
const friend = ["Anon", "Sakib", "Asik"];
// console.log(friend);
friend.pop();
friend.pop();
// console.log(friend);
const out3 = friend.pop();
// console.log(out3);

//shift & unshift
const student = ["Miraj", "Sakib", "Asik", "Yeamin"];
// console.log(student);
student.shift()
// console.log(student);

student.unshift("Nesar")
// console.log(student);


// All about basic array methods, isArray
// --------------------------------------

// includes
const boys = ["Miraj", "Yeamin", "Takmin", "Nesar", "Asik"]
// console.log(boys.includes("Miraj"));

// if(boys.includes("Miraj")) {
//     console.log("Lets go to Bandarban");
// }else  {
//     console.log("Then we are not going anywhere");
// }

// index
// console.log(boys.indexOf("Asik"));
// console.log(boys.indexOf("Tomato"))

// check is array
const food = "Ro sho gol la";
// console.log(Array.isArray(food));
// console.log(Array.isArray(boys));



// Task
// -----

// 01.
// const fruit = ["mango", "banana", "apple", "orange", "lichi"];
// console.log(fruit.indexOf("orange"));
// fruit[2] = "jambura";
// console.log(fruit);

// 02.
// const spot = ["bandarban", "sundarban", "sylhet"];
// spot.push("netrokona");
// console.log(spot);
// spot.push("cox-bazar");
// spot.push("rajshahi");
// console.log(spot);
// spot.pop();
// console.log(spot);

// 03.
// const book = ["bangla", "english", "math", "chemistry"];
// console.log(book.includes("javascript"));

// 04.
// const check =[]
// console.log(Array.isArray(check));

// 05.Concatination of two array
const farray = [2, 5, 8, 6];
const sarray = [4, 5, 8, 9];
console.log(farray.concat(sarray));