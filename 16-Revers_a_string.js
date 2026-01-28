// 16-Revers_a_string.js

let sentence = "I am learning Web Dev.";
let reverse = "";
for(let letter of sentence) {
    reverse = letter + reverse;
}
console.log(reverse);

console.log("--------------------");

// another way you cant ignor it now
let rev = "";
for(let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    rev = letter + rev;
}
console.log(rev);

console.log("--------------------");

// shortcut
let reversed = sentence.split("").reverse().join("");
console.log(reversed);