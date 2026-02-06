// 19.2-Who_is_the_Tallest_Find_the_Max_Number_In_an_Array.js

const height = [65, 66, 68, 72, 78, 60, 65, 66];

function getmax(numbers) {
    for(let  num of numbers) {
        console.log(num);
    }
}

const max = getmax(height);
console.log("Max Value is:", max);