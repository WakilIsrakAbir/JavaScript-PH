// Multi level If, Else If and Else condition
// ----------------

// const price = 4000;
// if(price >= 5000) {
//     // 10% discount
//     const discount = price * 10 / 100;
//     // console.log(discount);
//     const payAmount = price - discount;
//     console.log(payAmount)
// } else if(price > 2500) {
//     // 5% discount
//     const discount = price * 5 / 100;
//     const payAmount = price - discount;
//     console.log(payAmount)
// } else {
//     console.log(price);
// }

// -------------
const age = 67;
const price = 500;
if(age < 12) {
    console.log("You can Eat for free")
} else if(age >= 60) {
    // 50% discount
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else{
    console.log(price);
}