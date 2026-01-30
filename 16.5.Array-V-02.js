// 16.5.Array-V-02.js

// Array Traversal using for and while Loop

const friends = ["Elon", "Bill", "Mark", "Waren"];
for(const friend of friends) {
    // console.log(friend);
}

// another way using for loop
for(let i = 0; i < friends.length; i++) {
    // console.log(friends[i]);
}

// another way using while loop
let i = 0;
while(i < friends.length) {
    // console.log(friends[i]);
    i++;
}



// Reversing an array with/without reverse method

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers);
numbers.reverse();
console.log(numbers);

// another way to do reverse
console.log(numbers);
const number = numbers.reverse();
console.log(number);


// another way using for of loop
const revNumbers = [];
for (const num of numbers) {
    console.log(num);
    revNumbers.unshift(num);
}
console.log(revNumbers);


// another way using for loop

const reversed_numbers = [];
for(let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    reversed_numbers.unshift(num);
}
console.log(reversed_numbers);


// another way

const rev_rev_numbers = [];
for(let i = numbers.length - 1; i >= 0; i--) {
    const num = numbers[i];
    console.log(num);
    rev_rev_numbers.push(num);
}
console.log(rev_rev_numbers);


// Sort an array problems and solution
const persons = ["rakib", "sakib", "akib"];
const sortedPersons = persons.sort();
console.log(sortedPersons);



// sort
const num = [4, 7, 2, 8, 3, 6];

// --------------------------------------
// Assending order ---> 2, 3, 4, 6, 7, 8.
// Desending order ---> 8, 7, 6, 4, 3, 2.
// --------------------------------------
const num_assending = num.sort();
console.log(num_assending);



// not working properly
const num2 = [4, 7, 12, 8, 43, 6, 1];
const num2_assending = num2.sort();
console.log(num2_assending);

// to work for assending
const num3 = [4, 7, 12, 8, 43, 6, 1];
const num3_assending = [...num3].sort(function (a,b) {return a-b});
console.log(num3_assending);


// to work for dessending
const num4 = [4, 7, 12, 8, 43, 6, 1];
const num4_dessending = [...num4].sort(function (a,b) {return b-a});
console.log(num4_dessending);