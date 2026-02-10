// 20_5.02-Advance_Find_the_Matching_Product_by_Searching_Product.js

const numbers = [15, 665, 87, 12, 23];

for(let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

console.log("-----------------------------------------");

for(const number of numbers) {
    console.log(number);
}

console.log("-----------------------------------------");


// Matching product by searching
const products = [
    {id: 1, name: "xiomy phone one night", price: 19000},
    {id: 2, name: "i phone", price: 19000},
    {id: 3, name: "macbook air", price: 100000},
    {id: 4, name: "lenovo yoga yoga laptop", price: 20000},
    {id: 5, name: "dell inspiron laptop", price: 39000},
    {id: 6, name: "htc phone", price: 29000},
    {id: 7, name: "one plus phone", price: 19000},
    {id: 8, name: "hp laptop", price: 56000},
    {id: 9, name: "walton Phone", price: 10000}
];

// for(const product of products) {
//     console.log(product);
// }

function matchProducts(products, search) {
    const matched = [];
    for(const product of products) {
        // console.log(product.name.includes(search));
        if(product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}

const result = matchProducts(products, "phone");
console.log(result);