// 17-Return_All_the_Even_Number_of_Array.js

function evenNumbersOnly(numbers) {
    const evens = [];
    for(const number of numbers) {
        if(number % 2 === 0) {
            // console.log(number);
            evens.push(number);
        }
    }
    return evens;
}
const numbers = [5, 8, 91, 24, 6];
const evenNumber = evenNumbersOnly(numbers);
console.log(evenNumber);

console.log("-------------------------------------");

function sumOfEvenNumbers(numbers) {
    let sum = 0;
    for(const number of numbers) {
        if(number % 2 === 0) {
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}
const summation = sumOfEvenNumbers(numbers);
console.log("Sum Of the even number is", summation);