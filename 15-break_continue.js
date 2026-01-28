// 15-break_continue.js

// break using for loop
for(let i = 0; i < 15; i++) {
    console.log(i);
    if(i >= 10) {
        break;
    }
}
console.log("---------");

// break using while
let n = 10;
while(n >= 0) {
    console.log(n);
    if(n <= 5){
        break;
    }
    n = n-1;
}


console.log("----------");
// continue using for ----> skip this one
for(let i = 1; i < 10; i++) {
    if(i % 2 === 1) {
        continue;
    }
    console.log(i);
}

console.log("-----------")
// continue using while
let x = 0;
while (x < 50) {
    x++;
    if(x % 5 !== 0) {
        continue;
    }  
    console.log(x);
}
