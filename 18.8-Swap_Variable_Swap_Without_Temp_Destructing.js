// 18.8-Swap_Variable_Swap_Without_Temp_Destructing.js

let a = 5;
let b = 7;
console.log(a,b);

const temp = a;
a = b;
b = temp;
console.log(a,b);

console.log("-------------------------------");

let x = 50;
let y = 70;
console.log(x,y);
[x, y] = [y, x];
console.log(x, y);
