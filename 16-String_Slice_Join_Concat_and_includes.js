// 16-String_Slice_Join_Concat_and_includes.js

//  Slice
const address = "bandarban";
const part = address.slice(0, 3);
console.log(part);

console.log("----------------")

// join
const friendsStr = ["Miraj", "Akib", "Sakib", "Anon", "Rafin"];
const friends = friendsStr.join("|");
console.log(friends);

console.log("----------------")

// concat
const first = "Abir";
const last = "Rajin";
const addName = first + " " + last;
console.log(addName);

console.log("----------------")

// includes

console.log(first.includes("A"));