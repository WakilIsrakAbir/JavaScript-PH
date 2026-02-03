// 17-Different_Types_of_Parameters_For_a_Function.js


// for a given string tell me whether it has even number of charecters or not
function evenSizeString(str) {
    const size = str.length;
    console.log(str, size);
    if(size % 2 === 0) {
        console.log("Even Size");
        return true;
    }
    else {
        console.log("Odd Size");
        return false;
    }
}
evenSizeString("Dhaka");
evenSizeString("Faka");

console.log("--------------------------------------------");

function doubleOrTriple(number, doDouble) {
    if(doDouble === true) {
        const result = number * 2;
        return result;
    }
    else {
        const result = number * 3;
        return result;
    }
}
console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(5, false));

console.log("--------------------------------------------");

function numberOfElement(numbers) {
    const len = numbers.length;
    console.log(len);
    return len;
}
numberOfElement([12, 45, 78, 45, 4, 5]);

console.log("--------------------------------------------");

