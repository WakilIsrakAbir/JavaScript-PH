// 19.1-Can_You_Find_Out_Who_Will_Get_The_Strawberry.js

const disha = 56;

const salman = 60;

if(disha > salman) {
    console.log("Disha will Get the Strawberry.");
}
else {
    console.log("Salman will get the Strawberry.");
}

console.log("----------------------------------------");

// insode a function

function getMax(num1, num2) {
    if(num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}

const max = getMax(90, 30);
console.log("Max of Two is:", max);

console.log("----------------------------------------");

const max1 = getMax(15, 65);
const max2 = getMax(12, 4);
const ultimateMax = getMax (max1, max2);
console.log("Ultimate max is:", ultimateMax);

console.log("----------------------------------------");

// Max between 3

const abir = 90;
const wakil = 60;
const israk = 78;

if(abir > wakil && abir > israk) {
    console.log("Abir is the ultimate Boss.");
}
else if(wakil > abir && wakil > israk) {
    console.log("Wakil is the ultimate Bass.");
}
else {
    console.log("Israk is the ultimate boss.");
}

console.log("----------------------------------------");

// using function

function maxNumber(num1, num2, num3) {
    if(num1 > num2 && num1 > num3) {
        return num1;
    }
    else if(num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3
    }
}

const maximum = maxNumber(12, 56, 45);
console.log("Max number Between 3 Numbers is:", maximum);