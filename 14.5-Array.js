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
console.log(fourth);

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
console.log(student);
student.shift()
console.log(student);

student.unshift("Nesar")
console.log(student);


// All about basic array methods, isArray
// --------------------------------------
