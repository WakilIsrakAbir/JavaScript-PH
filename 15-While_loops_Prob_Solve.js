// 15-While_loops_Prob_Solve.js
let num = 1;
while(num <= 10) {
    console.log(num);
    num += 1;
}


let number = 50;
while(number <= 100) {
    console.log(number);
    number += 5;
}


// addition
let numbers = 1;
let sum = 0;
while(numbers <= 10) {
    console.log(numbers);
    sum = sum + numbers;
    console.log("sum: ", sum);
    numbers += 1;
}

// ------
let result = 1;
while(result <= 10) {
    console.log(result);
    if(result % 2 === 0) {
        console.log("Even: ", result);
    }
    result += 1;
}


// task
let time = 1;
while(time <= 60){
    console.log("I will invest at least 6 hrs every single day for next 60 days!");
    time += 1;
}
