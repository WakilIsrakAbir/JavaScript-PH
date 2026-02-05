// 18.3-Leap_Year.js

// Simple Logic : Year will be a leap year if the year is divisible by 4.
function isLeapYear(year) {
    if(year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}
const isleap = isLeapYear(2100);
console.log(isleap);

console.log("------------------------------------------------------------");

// those year that is not divisible by 100 but divisible by 4 also divisible by 400.   exp: 2000, 3000.
// this is wright way to find leap year not 1st one.
function isLeapYear2(year) {
    if(year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}
const isLeap2 = isLeapYear2(2100);
console.log(isLeap2);