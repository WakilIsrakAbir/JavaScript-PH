// 20-Assignment-03.js


// Problem-01

function newPrice(currentPrice, discount) {
    // Your code here
    if(typeof currentPrice !== "number" || typeof discount !== "number") {
        return "Invalid";
    }
    if(discount < 0 || discount > 100) {
        return "Invalid";
    }
    const dis = (currentPrice * discount) / 100;
    const newPrice = currentPrice - dis;
    return newPrice.toFixed(3);
}

const discountPrice = newPrice("1000", 10);
console.log(discountPrice);



// Problem-02

function validOtp(otp) {
    // You have to write your code here
    if(typeof otp !== "string") {
        return "Invalid";
    }
    if(otp.length !== 8) {
        return false;
    }
    if(!otp.startsWith("ph-")) {
        return false;
    }
    return true;
}

const input = validOtp([12345678]);
console.log(input);



// Problem-03

function finalScore (omr) {
    //write your code here
    // console.log(omr);

    let right = omr.right;
    let wrong = omr.wrong;
    let skip = omr.skip;
    const sum = right + wrong + skip;

    if(sum !== 100){
        return "Invalid";
    }

    if(typeof omr !== "object" || typeof omr === "symbol" || Array.isArray(omr)) {
        return "Invalid";
    }

    let wrongMark = wrong * 0.5;
    
    let totalSum = right - wrongMark;
    
    return Math.round(totalSum);

}

const omrData = { 
    right: 30,
    wrong: 30, 
    skip: 40 
};

const result = finalScore(omrData);
console.log(result);




// Problem-04

function gonoVote(array) {
    //write your code here
    // console.log(array);
    if(!Array.isArray(array)){
        return "Invalid";
    }

    const ha = [];
    const na = [];
    for(let arr of array) {
        if(arr === "ha"){
            ha.push(arr);
        }
        if(arr === "na") {
            na.push(arr);
        }
    }

    if(ha.length > na.length) {
        return true;
    }
    else if(ha.length < na.length) {
        return false;
    }
    else{
        return "equal";
    }
    console.log(ha);
    console.log(na);
}

const arr = 12345
const bijoy = gonoVote(arr);
console.log(bijoy);




// Problem-05

function  analyzeText(str) {
    // You have to write your code here
    // console.log(str);
    if(typeof str !== "string") {
        return "Invalid";
    }

    const trimed = str.trim();
    if(trimed.length === 0) {
        return "Invalid";
    }  
    

    let count = 0;
    const textLength = str.length;
    // console.log(textLength);
    for(let len of str) {
        if(len != " ") {
            count++;
        }
    }


    let longest = "";
    const words = str.split(" ");
    for(let long of words) {
        if(long.length > longest.length) {
            longest = long;
        }
    }
    return {longwords: longest, token: count}
}

const text = analyzeText("");
console.log(text);