// this are just the basics of javascript concepts and it will be updated and applay them ont the real projects!!
// for now see the basics and applay them on your consol
// Thank You!!!

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



var greeting = "Hello";
let name = "Alice";

const age = 25;

console.log(greeting); // Output: Hello
console.log(name);     // Output: Alice
console.log(age);      // Output: 25




function checkScope() {
  if (true) {
    var functionScope = 'I am visible within the function';
    let blockScope = 'I am visible only in this block';
    const anotherBlockScope = 'I am also visible only in this block';
  }
  console.log(functionScope); // Output: I am visible within the function
  console.log(blockScope);    // Error: blockScope is not defined
  console.log(anotherBlockScope); // Error: anotherBlockScope is not defined
}

checkScope();
