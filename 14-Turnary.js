// 14-Turnary.js

// simple turnary
// condition ? do something when true : do someyhing when false
const age = 18;
// age >= 18 ? console.log("You can vote") : console.log("ghumai thako")


// let price = 1100;
// const isLeader = true;
// if(isLeader === true) {
//     price = 0;
// }
// else{
//     price += 100;
// }
// console.log(price);
// turnaty
// price = isLeader === true ? 0 : price + 100;
// console.log(price);


// optional: semi advance
let price = 1100;
const isLeader = true;
// if(isLeader === true) {
//     if(price > 1000) {
//         price = price / 2;
//     }
//     else {
//         price = 0;
//     }
// }
// else {
//     price = price = 100;
// }
// console.log(price);
// turnary
price = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 100;
console.log(price);