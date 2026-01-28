// 16-get_set_object_properties.js
const persone = {
    name: "Wakil Israk Abir",
    age: 25,
    profession: "Student",
    salary: "No Salary",
    married: false,
    "fav place": ["Bandarban", "Sundarban", "Cox-Bazar"]
}
// value get using:
// dot notation
console.log(persone);
const income = persone.salary;
console.log(income);

console.log("-----------------");

// bracket notation
const boyos = persone["age"];
console.log(boyos);

console.log("-----------------");
 
// 
const keyName = "profession";
console.log(persone[keyName])

console.log("-----------------");

// value set 
persone.salary = 30000;
persone["age"] = 26
console.log(persone);

console.log("-----------------");

console.log(persone["fav place"]);

console.log("-----------------");

const proName = "profession";
persone[proName] = "Devops";
console.log(persone);

