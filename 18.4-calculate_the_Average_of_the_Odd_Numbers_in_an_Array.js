// 18.4-calculate_the_Average_of_the_Odd_Numbers_in_an_Array.js

// function takes an array as parameter then calculate the avarage of the odd number in the array. 


// sytem 1. put odd number in an array
function oddAverage(numbers) {
    const odds = [];
    for(const number of numbers) {
        if(number % 2 === 1) {
            // console.log(number);
            odds.push(number);
            
        }
    }
    // odds is the array that contains only the odd numbers
    console.log(odds);

    let sum = 0;
    for(const number of odds) {
        sum = sum + number;
    }
    const count = odds.length;
    const avg = sum / count;
    console.log("Sum is:",sum);
    return avg;
}
const numbers = [42, 13, 58, 65, 81, 7, 5];
const avg = oddAverage(numbers);
console.log("agerage of the odd number is:", avg);