// 15-differentWay.js

for(let i = 1; i <= 30; i++){
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(i)
    }
}

console.log("---------")

// give the sum of number from 1 to 20 that are divisible by 3
let total = 0;
for(let i = 1; i <= 20; i++) {
    if(i % 3 === 0) {
        console.log(i)
        total = total + i;
    }
}
console.log(total);