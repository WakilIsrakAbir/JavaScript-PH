// 14-task.js
// ----------

// 01.
const burger = 300;
if(burger > 500) {
    console.log("free Coke");
}else {
    console.log("pay 30tk");
}


// 02.
const weight = 70;
const height = 1.75;
const BMI = weight / height ** 2;
if(BMI < 18.5) {
    console.log("You are underweight")
}
else if(BMI >= 18.5 && BMI<=24.9){
    console.log("You are Normal")
}
else if(BMI >= 25 && BMI<= 29.9){
    console.log("You are overweight");
}
else{
    console.log("You are obese");
}


// 03.
const mark = 10;
if(mark >= 90 && mark <= 100){
    console.log("A");
}
else if(mark >= 80 && mark <= 89){
    console.log("B");
}
else if(mark >= 70 && mark <= 79){
    console.log("C");
}
else if(mark >= 60 && mark <= 69){
    console.log("D");
}
else if(mark >= 0 && mark <= 59){
    console.log("F");
}
else{
    console.log("You are not attend in exam");
}


// 04.
const result = 85;
const friendFesult = 65;
if(result >= 80) {
    if(friendFesult < 80 && result >= 60) {
        console.log("good luck for next time");
    }
    else if(friendFesult < 60 && result >= 40) {
        console.log("keep your friend's message unseen");
    }
    else if(friendFesult < 40) {
        console.log("block your friend");
    }
}
else{
    console.log("go to home and sleep and act sad");
}


// 05.
const nbr1 = 30;
const nbr2 = 40;

if(nbr1 > nbr2){
    const theResult = nbr1 * 2;
    console.log(theResult);
}
else{
    const theResult = nbr1 + nbr2;
    console.log(theResult);
}

// turnary
nbr1 > nbr2 ? theResult = nbr1 * 2 : theResult = nbr1 + nbr2 ;
console.log(theResult);


// 06.
const age = 0;
let ticket = 800;
if(age < 10) {
    console.log("Children: Free");
} else if(age >= 10 && age < 60) {
    console.log("Student: Get 50% off");
    let discount = ticket * 0.50;
    ticket = ticket - discount;
    console.log(ticket);
} else if(age >= 60) {
    console.log("Senior citizens gets a 15% Discount");
    let discount = ticket * 0.15;
    ticket = ticket - discount;
    console.log(ticket);
} else {
    console.log(ticket);
}