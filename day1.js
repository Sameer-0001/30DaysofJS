// Activity 1: Variable Declaration

// Task 1: Declare a variable using `var`, assign it a number, and log the value to the console.
var age = 20;
console.log(age); // Output: 20

// Task 2: Declare a variable using `let`, assign it a string, and log the value to the console.
let greetingMessage = "Hello everyone, Sameer this side";
console.log(greetingMessage); // Output: Hello everyone, Sameer this side

// Activity 2: Constant Declaration

// Task 3: Declare a variable using `const`, assign it a boolean value, and log the value to the console.
const isActive = false;
console.log(isActive); // Output: false

// Activity 3: Data Types

// Task 4: Create variables of different data types and log each variable's type using the `typeof` operator.
let heightInCm = 190; // Number
let country = "India"; // String
let isStudent = true; // Boolean
let mobileSpecs = { brand: "Tech Products", model: "Apple", year: 2024 }; // Object
let productList = ["iPhone", "iPad", "Mac", "iWatch", "Apple TV"]; // Array

console.log("Value: ", heightInCm, ", Type: ", typeof heightInCm); // Output: Value: 190, Type: number
console.log("Value: ", country, ", Type: ", typeof country); // Output: Value: India, Type: string
console.log("Value: ", isStudent, ", Type: ", typeof isStudent); // Output: Value: true, Type: boolean
console.log("Value: ", mobileSpecs, ", Type: ", typeof mobileSpecs); // Output: Value: { brand: "Tech Products", model: "Apple", year: 2024 }, Type: object
console.log("Value: ", productList, ", Type: ", typeof productList); // Output: Value: [iPhone, iPad, Mac, iWatch, Apple TV], Type: object (Arrays are a type of object in JavaScript)

// Activity 4: Reassigning Variables

// Task 5: Declare a variable using `let`, assign it an initial value, reassign a new value, and log both values to the console.
let magicalNumber = 101;
console.log(magicalNumber); // Output: 101
magicalNumber = 303;
console.log(magicalNumber); // Output: 303

// Activity 5: Understanding `const`

// Task 6: Try reassigning a variable declared with `const` and observe the error.
const constantValue = "Constant Value";
console.log(constantValue); // Output: Constant Value
// Uncommenting the next line will cause an error
// constantValue = "New Value"; // Error: Assignment to constant variable.

// Feature Request:

// 1. Variable Types Console Log
let numberExample = 456;
let stringExample = "Exploring JavaScript";
let booleanExample = false;
let objectExample = { planet: "Mars", moons: 2 };
let arrayExample = [5, 10, 15, 20];
let undefinedExample;
let nullExample = null;

console.log("Value: ", numberExample, ", Type: ", typeof numberExample); // Output: Value: 456, Type: number
console.log("Value: ", stringExample, ", Type: ", typeof stringExample); // Output: Value: Exploring JavaScript, Type: string
console.log("Value: ", booleanExample, ", Type: ", typeof booleanExample); // Output: Value: false, Type: boolean
console.log("Value: ", objectExample, ", Type: ", typeof objectExample); // Output: Value: { planet: "Mars", moons: 2 }, Type: object
console.log("Value: ", arrayExample, ", Type: ", typeof arrayExample); // Output: Value: [5, 10, 15, 20], Type: object (Arrays are a type of object in JavaScript)
console.log("Value: ", undefinedExample, ", Type: ", typeof undefinedExample); // Output: Value: undefined, Type: undefined
console.log("Value: ", nullExample, ", Type: ", typeof nullExample); // Output: Value: null, Type: object (This is a well-known quirk in JavaScript)

// 2. Reassignment Demo
let dynamicValue = "Initial Value";
console.log(dynamicValue); // Output: Initial Value
dynamicValue = "Updated Value";
console.log(dynamicValue); // Output: Updated Value

const fixedValue = "Constant Value";
console.log(fixedValue); // Output: Constant Value
// Uncommenting the next line will cause an error
// fixedValue = "Changed Value"; // Error: Assignment to constant variable.
