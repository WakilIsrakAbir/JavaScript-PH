// 16-Keys_Values,NestedObject_Delet.js

const computer = {
    brand: "lenovo",
    price: 35000,
    processor: "intel",
    hdd: "512gb"
}  

// keys
const keys = Object.keys(computer);
console.log(keys);

// values
const values = Object.values(computer);
console.log(values);

// nestedObject
const college = {
    name: "Model School and College",
    class: ["11", "12"],
    events: ["science fair", "bijoy dibos", "21 feb"],
    unique: {
        color: "blue",
        result: {
            gpa: "5",
            marit: "top"
        }
    }
}
console.log(college.unique.color);

college.unique.result.marit = "top top top most";
console.log(college.unique.result.marit);

console.log(college.unique.result.gpa);

college.events[1] = "16 December";
console.log(college.events[1]);


// delete
delete college.class;

console.log(college)