// 17-Sum_of_all_Numbers_in_an_Array.js

function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers) {
        console.log(number);
        sum = sum + number;
        // don't use return inside the loop.
    }
    return sum;
}
const nums = [54, 62, 12, 6]
const sum = sumOfNumbers(nums);
console.log("Sum of Number is:", sum);