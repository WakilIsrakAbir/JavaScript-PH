// 17-Argument_VS_Parameter.js


// here number is parameter
function doubleIt (number) {
    const doubled = number * 2;
    console.log("Given Number:", number, "Doubled Value of This Number:", doubled);
}
// here 5 and 56 is argument
doubleIt(5);
doubleIt(56);

// you also do like that
const number = 50;
doubleIt(number);

// also like that
function difference (num1, num2) {
    const diff = num1 - num2;
    console.log(num1, num2, "Difference is:", diff);
}

const fatherAge = 40;
const myAge = 25;
difference(fatherAge,myAge);
