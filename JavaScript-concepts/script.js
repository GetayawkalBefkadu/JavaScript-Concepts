function sayHello() {
  alert('Hello from script.js!');
}
let name = 'John'; // String
const age = 30; // Number
var isStudent = true; // Boolean

console.log(name, age, isStudent);

function greet() {
  console.log('Hello, there!');
}

greet(); // Calling the function

for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`);
}

let score = 85;

if (score >= 90) {
  console.log('A');
} else if (score >= 80) {
  console.log('B');
} else {
  console.log('C');
}
