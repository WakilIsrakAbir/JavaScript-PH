// 15-task.js

// 01.commitment using for loop
for(let i = 1; i <= 60; i++) {
    // console.log("I will invest at least 6 hrs every single day for next 60 days!");
}

// 01.commitment using while loop
let i = 0;
while(i <= 60) {
    // console.log("I will invest at least 6 hrs every single day for next 60 days!");
    i += 1;
}


// 02.odd even using for loop
for(let odd = 60; odd <= 100; odd++) {
    if(odd % 2 === 1){
        // console.log("Odd Numbers:", odd);
    }
}

console.log("---------------------");

for(let even = 60; even <= 100; even++) {
    if(even % 2 === 0){
        // console.log("Even Numbers:", even);
    }
}

// 02.odd even using while loop
let odd = 60;
while(odd <= 100) {
    if(odd % 2 === 1) {
        // console.log("Odd Numbers: ",odd);
    }
    odd = odd + 1;
}

console.log("------------------------");

let even = 60;
while(even <= 100) {
    if(even % 2 === 0) {
        // console.log("even Numbers: ",even);
    }
    even = even + 1;
}

// 03.Display sum of all the odd numbers from 81 to 131. using for loop
let sum = 0;
for(let odd = 80; odd <= 132; odd++) {
    if(odd % 2 === 1) {
        sum = sum + odd;
    }
}
console.log("sum of all the odd numbers from 81 to 131: ", sum);

let s = 0;
for(let even = 206; even <= 311; even++) {
    if(even % 2 === 0) {
        s = s + even;
    }
}
console.log("sum of all the even numbers from 206 to 311: ", s);


// 03.Display sum of all the odd numbers from 81 to 131. using while loop
let sm = 0;
let od = 80;
while(od <= 132) {
    if(od % 2 === 1) {
        sm = sm + od;
    }
    od = od + 1;
}
console.log("sum of all the odd numbers from 81 to 131: ", sm);


let su = 0;
let ev = 206;
while(ev <= 311) {
    if(ev % 2 === 0) {
        su = su + ev;
    }
    ev = ev + 1;
}
console.log("sum of all the odd numbers from 81 to 131: ", su);


// 04.Tell Ersa to generate a multiplication table for number 5 using for loop
let m = 5;
let total = 0;
for(let i = 0; i <= 10; i++) {
    total = i * m ;
    console.log(total, " = ", i, " * ", m);
}

console.log("----------------------")

// 04.Tell Ersa to generate a multiplication table for number 5 using while loop
let mult = 5;
let start = 0;
let all = 0;
while(start <= 10) {
    all = start * mult;
    console.log(all, " = ", start, " * ", mult);
    start = start + 1;
}

console.log("--------------------------");

// 05.counts down from 21 to 15. using for loop
for(let count = 21; count >= 15; count = count - 1) {
    console.log(count);
}

console.log("--------------------------");

// 05.counts down from 21 to 15. using while loop
let count = 21;
while(count >= 15) {
    console.log(count);
    count = count - 1;
}

console.log("--------------------------");


// Break Task 1.century
for(let i = 1; i <= 200; i++) {
    if(i === 100){
        break;
    }
    console.log(i);
}

console.log("--------------------------");

// break task 2.sum upto 100
let nbr = 1;
let sumation = 0;
while(nbr <= 100) {
    sumation = sumation + nbr;
    if(sumation >= 100) {
        break;
    }
    console.log(sumation);
    nbr = nbr + 1;
}

console.log("--------------------------");

// break task 3.square break
for(let i = 1; i <= 100; i++) {
    if(i === 4 || i === 9 || i === 16){
        break;
    }
    console.log(i);
}

console.log("--------------------------");

// continue task 1.skip odd
for(let i = 0; i <= 40; i++) {
    if(i % 2 === 1) {
        continue;
    }
    console.log(i);
}

console.log("--------------------------");

// continue task 2.skip-five
for(let i = 55; i <= 85; i++) {
    if(i % 2 === 0 || i % 5 === 0) {
        continue;
    }
    console.log(i);
}