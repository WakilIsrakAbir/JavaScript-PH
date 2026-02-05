// 18.5-Remove_Duplicate_Items_From_an_Array.js

const biriyaniKhor = ["wakil", "israk", "abir", "abir", "rajin", "saleh", 'saleh'];

function noDUplicate(array) {
    const unique = [];
    for(const item of array) {
        if(unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDUplicate(biriyaniKhor);
console.log(uniqueArray);