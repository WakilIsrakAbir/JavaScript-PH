// 16-String_Task.js

// problem 1

const fullName = "wakil israk abir";

let count = 0;
for(const name of fullName){
    // console.log(name);
    if(name.includes("a")) {
        count = count + 1;
    }
}
console.log(count);


console.log("--------------------------------------");

// Problem 2

const sentense = "Hello Wakil Israk Abir! How Are you?"

let countLetter = 0;
for(const name of sentense){
    // console.log(name);
    if(name.includes("A") || name.includes("a")) {
        countLetter = countLetter + 1;
    }
}
console.log(countLetter);

console.log("--------------------------------------");

// Problem 3

const newSentence = "Bangladesh is a Overgreen Country."

let vowel = []
for(const sentense of newSentence) {
    if("aeiou".includes(sentense)) {
        vowel.push(sentense);
    }
}
console.log(vowel);

if(vowel.includes("a") && vowel.includes("e") && vowel.includes("i") && vowel.includes("o") && vowel.includes("u") ) {
    console.log("string contains all the vowels");
}
else {
    console.log("string not contains all the vowels");
}


console.log("--------------------------------------");

// problem 4

const spaceX = "Space X situated in America. x Contain yellow Office";

let changeString = "";
for(const change of spaceX) {
    if(change === "x") {
        changeString = changeString + "y";
    } 
    else if(change === "X") {
        changeString = changeString + "Y";
    }
    else if(change === "y") {
        changeString = changeString + "x";
    }
    else if(change === "Y") {
        changeString = changeString + "X";
    }
    else {
        changeString = changeString + change;
    }
}
console.log(changeString);


console.log("--------------------------------------");

// Problem 5

const textString = "hi i am wakil israk abir";
let resultString = "";

for(let i = 0; i < textString.length; i++) {
    if(i === 0 || textString[i-1] === " ") {
        resultString = resultString + textString[i].toLocaleUpperCase();
    }
    else {
        resultString = resultString + textString[i];
    }
}

console.log(resultString)

