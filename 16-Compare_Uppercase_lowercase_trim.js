// 16-Compare_Uppercase_lowercase_trim.js


// uppercase: ABC
// lowercase: abc
const school = "RAJUK Uttara Model School";
console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

// comparision
const subject = "Chemistry";
const book = "chemistry";
if(subject.toUpperCase() === book.toUpperCase()) {
    console.log("Portesi");
}
else{
    console.log("Hudai Boi Niye bose Achi");
}


// trim
const drink = "water";
const liquid = " water";
if(drink.trim() === liquid.trim()) {
    console.log("Ok");
}
else {
    console.log("Not Ok")
}