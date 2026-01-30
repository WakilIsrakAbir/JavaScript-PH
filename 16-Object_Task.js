// 16-Object_Task.js

// task - 01. Access the golden rod color value in output.

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

const rod = colors["golden rod"];
console.log(rod);


// task - 02. Display the physics marks as output.

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

const physics_marks = student.physics.marks;
console.log(physics_marks);


// task - 03. For this object below add a property named passenger capacity with value 5

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car.passenger_capacity = 5;
console.log(car);


// task - 04. Count the number of properties.

let students = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

// const keys = Object.keys(students);
// console.log(keys.length);



// task - 05. Loop through an object and print the key-value pairs with their types

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

const keys = Object.keys(myObject);
for(const key of keys) {
    console.log("Key: ", key, " | ", "type: ", typeof(myObject[key]));
}