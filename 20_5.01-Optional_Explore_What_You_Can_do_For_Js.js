// 20_5.01-Optional_Explore_What_You_Can_do_For_Js.js

// object
const nayok = {
    name: "Wakil Israk Abir",
    id: 122,
    address: "East Nakhalpara",
    isSingle: true,
    friends: ["Akib", "Sakin", "Munna", "Akon"],
    movies: [{name: "No.1", year: 2002,}, {name: "king khna", year: 2018}],
    act: function() {
        console.log("acting like sakib khan");
    },
    car: {
        brand: "tesla",
        price: 5000000,
        made: 2025,
        manufecturer: {
            name: "tesla",
            ceo:"elon mask",
            country: "usa"
        }
    }
}

// console.log(nayok.car)
console.log(nayok.act)
nayok.act();


console.log("---------------------------------");


// array

// const product = [
//     {name: "Phone", price: 25000},
//     {nsme: "Laptop", price: 70000},
// ]

// product[0];
// product[1];


// const products = [15, 65, 12];
const products = {
    "0": 15,
    "1": 65,
    "3": 12
}


console.log("---------------------------------");


// function

function add(num1, num2) {
    console.log(num1 + num2);
    console.log(arguments);
    console.log(arguments[3]);
};

add(12,13, 45, 65, 95)