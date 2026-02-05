// 18.2-Unit_Convert_Inch_to_Feet_Miles_to_Km.js

// 12 inch 1 feet
function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}
const abirHeight = inchToFeet(68);
console.log(abirHeight);

console.log("-------------------------------------------------------");

// Another Way
 function inchToFeet2(inch) {
    const fettFraction = inch / 12;
    const feetNumber = parseInt(fettFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + " feet " + inchRemaining + " inch ";
    return result;
 }
 const rajinHeight = inchToFeet2(67);
 console.log(rajinHeight);

 console.log("-------------------------------------------------------");

//  Miles to K.M.
function mileToKilometer(mile) {
    const kilo = mile * 1.60934;
    const result = mile + "Mile = " + kilo + "Kilo";
    return result;
}
const kilo = mileToKilometer(12);
console.log(kilo);

console.log("-------------------------------------------------------");

// Another Way
function kiloMeterToMiles(Kilometer) {
    const mile = Kilometer * 0.621371;
    result = Kilometer + " K.M = " + mile + "Miles"
    return result;
}
const mile = kiloMeterToMiles(10);
console.log(mile);