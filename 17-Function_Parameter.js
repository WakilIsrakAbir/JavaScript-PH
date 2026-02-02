// 17-Function_Parameter.js

function square(number) {
    console.log("value of the number parameter:",number);
    const borgo = number * number;
    console.log("squre of the given number is:",borgo);
}
square(5);
square(10);

console.log("-----------------------------------------");

function add(num1, num2) {
    console.log("Value of two number :", num1, " , ", num2);
    const sum = num1 + num2;
    console.log("Sum of two number:", sum);
}
add(5, 9);

console.log("-----------------------------------------");

function multi(a, b, c, d, e) {
    console.log("Values are:", a, b, c, d, e);
    const total = a * b * c * d * e;
    console.log("total value of this mutiplication:", total);
}
multi(1, 5, 5, 4, 8);