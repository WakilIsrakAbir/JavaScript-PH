// 17-Conditional_Return_of_Odd_and_Even.js

function add(price1, price2) {
    const total = price1 + price2;
    return total;
}
const bill = add (50, 40);
console.log("Your Total Bill:", bill);

console.log("----------------------------------------");

// another way to return
function add2(price1, price2) {
    return price1 + price2;
}
const bill2 = add2 (100, 50);
console.log("Your Total Bill:", bill2);

console.log("----------------------------------------");

function doMath(num1, num2) {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const mult = sum * diff;
    const result = mult / 2;
    return result;
}

const result = doMath(10, 5);
console.log(result);

console.log("----------------------------------------");

// conditional return
function isEven(number) {
    if(number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven(5));
console.log(isEven(110));

console.log("----------------------------------------");

function isOdd(number) {
    if(number % 2 === 1) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isOdd(7));
console.log(isOdd(10));
