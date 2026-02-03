// 17-Function_Return_And_Set_Return_Value.js

function tenTimes(number) {
    const result = number * 10;
    return result;
}
const result = tenTimes(15);
console.log("output:", result);

console.log("-----------------------------------");

// without return it's not working
function cutHulf (number) {
    const half = number / 2;
}
const total = cutHulf(15);
console.log("output:", total);
