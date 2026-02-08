// 16.5.Array-V-02_Task.js

// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.
// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']
// Output: ['orange', 'yellow', 'green', 'blue', 'red']

const colors = ['red', 'blue', 'green', 'yellow', 'orange']
colors.reverse();
console.log(colors);

console.log("------------------------------------");
// another way
const rong = ['red', 'blue', 'green', 'yellow', 'orange']
const revColors = [];
for(const color of rong) {
    revColors.unshift(color);
}
console.log(revColors);

console.log("------------------------------------");

// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.
// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];
// Output: [12, 98, 76, 46]

const numbers = [12, 98, 5, 41, 23, 78, 46];

evenNumber = [];
for(const number of numbers) {
    if(number % 2 === 0) {
        evenNumber.push(number);
    }
}
console.log(evenNumber);

console.log("------------------------------------");

// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.
// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
// Output: 'TomTimTinTik'

var num = ['Tom', 'Tim', 'Tin', 'Tik'];

numString = "";
for(const numArray of num) {
    numString = numString + numArray
    // console.log(numString);
}
console.log(numString);

console.log("------------------------------------");

// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
// Input: const statement = 'I am a hard working person'
// Output: 'person working hard a am I'

const statement = 'I am a hard working person';
const words = statement.split(" ");
console.log(words);
const reversedWord = words.reverse();
console.log(reversedWord);
const result = reversedWord.join(" ");
console.log(result);

console.log("------------------------------------");

// Task 5
// Copy the given array into another array so that changing the copy does not affect the original.
// Change the first element of the copied array to 99.
// Input: [1, 2, 3]
// Expected Output: Original: [1, 2, 3] Copy: [99, 2, 3]

const original = [1, 2, 3];

const copy = [... original];

copy[0] = 99;

console.log("Original:",original);
console.log("Copy:",copy)

console.log("------------------------------------");

// Task 6
// Given an array of student objects, print each student’s name and marks.
// [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ]
// Expected ooutput:
// John scored 85
// Alice scored 90

const student = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]

// console.log(student);

for(let i = 0 ; i < student.length; i++) {
    console.log(student[i].name + " Scored " + student[i].marks);
}

console.log("------------------------------------");

// Task 7
// Given a 2D array, update the value at second row first item to 99 and print the updated array.

// input:  [
//         [1, 2],
//         [3, 4],
//         [5, 6]
//         ]
// Expected Array: [
//                 [1, 2],
//                 [99, 4],
//                 [5, 6]
//                 ]

const input =   [
                [1, 2],
                [3, 4],
                [5, 6]
                ]
// console.log(input);
newInput = input[1] ;
newInput[0] = 99;
console.log(input);