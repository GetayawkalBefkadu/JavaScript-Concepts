let name = "Alice"; // Mutable variable
const age = 25;    // Immutable variable
//----------------------------------------------
let message = "Hello, world!"; // String
let count = 10;                 // Number
let isActive = true;           // Boolean
let user = { name: "Bob", age: 30 }; // Object
let numbers = [1, 2, 3, 4, 5]; // Array
//----------------------------------------------
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!

//----------------------------------------------
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}
//----------------------------------------------
for (let i = 0; i < 5; i++) {
    console.log(i); // Outputs: 0, 1, 2, 3, 4
}
//----------------------------------------------
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
//----------------------------------------------
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

let fruits = ["apple", "banana", "cherry"];
console.log(car.make); // Output: Toyota
console.log(fruits[1]); // Output: banana
//----------------------------------------------
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data received!");
    }, 2000);
});

promise.then((message) => {
    console.log(message); // Output after 2 seconds: Data received!
});
//----------------------------------------------
try {
    throw new Error("Something went wrong!");
} catch (error) {
    console.log(error.message); // Output: Something went wrong!
}

const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
//----------------------------------------------
<button id="myButton">Click me!</button>
<script>
    document.getElementById("myButton").addEventListener("click", function() {
        alert("Button was clicked!");
    });
</script>

//----------------------------------------------
let globalVar = "I'm global";

function myFunction() {
    let localVar = "I'm local";
    console.log(globalVar); // Accessible
    console.log(localVar);   // Accessible
}

myFunction();
console.log(globalVar); // Accessible
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined

//----------------------------------------------
console.log(myVar); // Output: undefined
var myVar = 5;

function myFunc() {
    console.log(myFuncVar); // Output: undefined
    var myFuncVar = 10;
}
myFunc();

//----------------------------------------------
const person = {
    name: "Alice",
    greet() {
        console.log(`Hello, ${this.name}`);
    }
};

person.greet(); // Output: Hello, Alice

const greetFunction = person.greet;
greetFunction(); // Output: Hello, undefined (in non-strict mode)

//----------------------------------------------

function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
};

const dog = new Animal("Rex");
dog.speak(); // Output: Rex makes a noise.

//----------------------------------------------

//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------










































// // this are just the basics of javascript concepts and it will be updated and applay them ont the real projects!!
// // for now see the basics and applay them on your consol. and trust the process 
// // try the script or the function separetly in ordoer to see the specfic result
// // Thank You!!!

// function sayHello() {
//   alert('Hello from script.js!');
// }
// let name = 'John'; // String
// const age = 30; // Number
// var isStudent = true; // Boolean

// console.log(name, age, isStudent);

// function greet() {
//   console.log('Hello, there!');
// }

// greet(); // Calling the function

// for (let i = 0; i < 5; i++) {
//   console.log(`Iteration ${i}`);
// }

// let score = 85;

// if (score >= 90) {
//   console.log('A');
// } else if (score >= 80) {
//   console.log('B');
// } else {
//   console.log('C');
// }



// var greeting = "Hello";
// let name = "Alice";

// const age = 25;

// console.log(greeting); // Output: Hello
// console.log(name);     // Output: Alice
// console.log(age);      // Output: 25




// function checkScope() {
//   if (true) {
//     var functionScope = 'I am visible within the function';
//     let blockScope = 'I am visible only in this block';
//     const anotherBlockScope = 'I am also visible only in this block';
//   }
//   console.log(functionScope); // Output: I am visible within the function
//   console.log(blockScope);    // Error: blockScope is not defined
//   console.log(anotherBlockScope); // Error: anotherBlockScope is not defined
// }

// checkScope();



// const bookSeeker = "James";
// const book = "Great Expectations";
// function library() {
//   const librarian = "Julia"; 
//     console.log(bookSeeker + " asked " + librarian + " for " + book);
//     function classicLiterature() {
//         const shelf = "Dickens"; 
//         console.log( bookSeeker + " found " + book + " on the " + shelf + " shelf!");
//     }
//     classicLiterature();
// }



// let fruit = "apple"; 

// if (fruit !== "banana") {
//     let fruit = "banana";
//     console.log(fruit);   
// }
// console.log(fruit);  



// let x = 1;

// function addTwo() {
//     x = x + 2;
// }

// addTwo();
// x = x + 1;
// console.log(x);



// const catSays = function(max) {
//   let catMessage = "";
//   for (let i = 0; i < max; i++) {
//     catMessage += "meow ";
//   }
//   return catMessage;
// };

// catSays;
// // --------------------------------------------
// function makeLine(length) {
//   var let = "";
//   for (let j = 1; j <= length; j++) {
//     line += "* "
//   }
//   return line + "\n";
// }

