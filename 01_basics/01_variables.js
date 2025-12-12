// ==================== VAR BASICS ====================
// Can be declared and initialized
var name1 = "John";
console.log(name1); // "John"

// Can be reassigned
name1 = "Mike";
console.log(name1); // "Mike"

// Can be redeclared (BAD PRACTICE)
var age = 25;
var age = 30; // No error - problematic!
console.log(age); // 30

// ==================== SCOPE ISSUES ====================
// Function-scoped, not block-scoped
function testVarScope() {
    if (true) {
        var insideIf = "I'm inside if";
        console.log(insideIf); // Works
    }
    console.log(insideIf); // Still works! (Problematic)
}
testVarScope();

// Global scope pollution
for (var i = 0; i < 3; i++) {
    // i is accessible outside
}
console.log(i); // 3 - Leaked outside loop!

// ==================== HOISTING ====================
// var declarations are hoisted
console.log(myVar); // undefined (not error)
var myVar = "hoisted";
// Above is interpreted as:
// var myVar; // Declaration hoisted
// console.log(myVar); // undefined
// myVar = "hoisted"; // Initialization stays

// ==================== ISSUES WITH VAR ====================
// 1. Accidental redeclaration
var count = 10;
// ... 100 lines later ...
var count = 20; // Oops! Didn't realize count existed

// 2. Loop variable leakage
for (var j = 0; j < 3; j++) {
    setTimeout(function () {
        console.log(j); // All print 3!
    }, 100);
}





// ==================== LET BASICS ====================
// Can be declared and initialized
let username = "Alice";
console.log(username); // "Alice"

// Can be reassigned
username = "Bob";
console.log(username); // "Bob"

// CANNOT be redeclared in same scope
let score = 100;
// let score = 200; // SyntaxError: Identifier 'score' has already been declared

// ==================== BLOCK SCOPE ====================
// Proper block scoping
function testLetScope() {
    if (true) {
        let secret = "password123";
        console.log(secret); // Works
    }
    // console.log(secret); // ReferenceError: secret is not defined
}
testLetScope();

// Loop variables stay in loop
for (let k = 0; k < 3; k++) {
    // k is only accessible here
}
// console.log(k); // ReferenceError: k is not defined

// ==================== TEMPORAL DEAD ZONE ====================
// let variables are hoisted but not initialized
// console.log(temp); // ReferenceError: Cannot access 'temp' before initialization
let temp = "ready";

// ==================== RE-DECLARATION IN DIFFERENT SCOPES ====================
let global = "I'm global";
if (true) {
    let global = "I'm local"; // Allowed - different scope
    console.log(global); // "I'm local"
}
console.log(global); // "I'm global"

// ==================== LOOP EXAMPLE ====================
// Correct closure behavior with let
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // 0, 1, 2 (correct!)
    }, 100);
}





// ==================== CONST BASICS ====================
// Must be initialized during declaration
const PI = 3.14159;
console.log(PI); // 3.14159

// CANNOT be reassigned
// PI = 3.14; // TypeError: Assignment to constant variable

// CANNOT be redeclared
// const PI = 3.14; // SyntaxError: Identifier 'PI' has already been declared

// ==================== CONST WITH OBJECTS ====================
// The variable cannot be reassigned, but object properties can change
const person = {
    name: "John",
    age: 30
};

// This is OK - modifying property
person.age = 31;
person.city = "New York";
console.log(person); // {name: "John", age: 31, city: "New York"}

// This is NOT OK - reassigning variable
// person = {name: "Mike"}; // TypeError: Assignment to constant variable

// ==================== CONST WITH ARRAYS ====================
const colors = ["red", "green"];

// This is OK - modifying array
colors.push("blue");
colors[0] = "pink";
console.log(colors); // ["pink", "green", "blue"]

// This is NOT OK - reassigning array
// colors = ["yellow", "purple"]; // TypeError

// ==================== BLOCK SCOPE ====================
if (true) {
    const message = "Hello";
    console.log(message); // "Hello"
}
// console.log(message); // ReferenceError: message is not defined

// ==================== CONST IN LOOPS ====================
// For-of loop - const works
const numbers = [1, 2, 3];
for (const num of numbers) {
    console.log(num); // 1, 2, 3
    // num = 10; // Error - can't reassign const
}

// Traditional for loop - use let, not const
for (let i = 0; i < 3; i++) {
    // const i = 0; // Would fail - i++ tries to reassign
}

// ==================== OBJECT.FREEZE ====================
// To make object truly immutable
const frozenObject = Object.freeze({
    name: "Immutable",
    value: 100
});

// frozenObject.value = 200; // Silently fails in non-strict mode
// In strict mode: TypeError: Cannot assign to read only property 'value'

// But freezing is shallow!
const nestedObject = Object.freeze({
    data: [1, 2, 3]
});
nestedObject.data.push(4); // This works! Array is not frozen
console.log(nestedObject.data); // [1, 2, 3, 4]


// ==================== SIDE-BY-SIDE COMPARISON ====================
// 1. Declaration and Initialization
var v1; // OK - undefined
let l1; // OK - undefined
// const c1; // Error: Missing initializer

// 2. Reassignment
var v2 = 1;
v2 = 2; // OK

let l2 = 1;
l2 = 2; // OK

const c2 = 1;
// c2 = 2; // Error

// 3. Scope
function scopeTest() {
    if (true) {
        var varScoped = "var";
        let letScoped = "let";
        const constScoped = "const";
    }
    console.log(varScoped); // "var" - accessible
    // console.log(letScoped); // Error - not accessible
    // console.log(constScoped); // Error - not accessible
}
scopeTest();

// ==================== BEST PRACTICES ====================
// 1. Use const by default
const API_URL = "https://api.example.com";
const CONFIG = {
    timeout: 5000,
    retries: 3
};
const COLORS = ["red", "blue", "green"];

// 2. Use let when you need to reassign
let isLoading = false;
let userInput = "";
let counter = 0;

// 3. Avoid var entirely in modern code
// var oldVariable = "avoid this"; // Don't use

// 4. Naming conventions
const MAX_RETRIES = 5; // UPPER_SNAKE_CASE for true constants
let currentUser = null; // camelCase for variables

// ==================== PRACTICAL EXAMPLES ====================
// Example 1: User authentication
const USER_ROLES = {
    ADMIN: "admin",
    USER: "user",
    GUEST: "guest"
};

let currentUserRole = USER_ROLES.GUEST;
let isAuthenticated = false;

function login(userRole) {
    isAuthenticated = true;
    currentUserRole = userRole;
    // USER_ROLES = {}; // Would fail - const prevents reassignment
}

// Example 2: Shopping cart
const TAX_RATE = 0.08; // Constant value
let cartItems = []; // Will be modified
let subtotal = 0; // Will change

function addItem(price) {
    cartItems.push(price);
    subtotal += price;
}

// Example 3: Game state
const MAX_SCORE = 1000; // Constant
let playerScore = 0; // Changes during game
let gameActive = true; // Boolean flag that changes

// ==================== COMMON PITFALLS ====================
// Pitfall 1: const doesn't make objects immutable
const settings = { sound: true };
settings.sound = false; // OK - object is mutable
// Object.freeze(settings); // Use this for immutability

// Pitfall 2: Re-declaring in switch blocks
let action = "create";
switch (action) {
    case "create":
        let result = "created"; // Need block {}
        break;
    case "update":
        // let result = "updated"; // Error - result already declared
        break;
}

// Fix with block scope
switch (action) {
    case "create": {
        let result = "created";
        break;
    }
    case "update": {
        let result = "updated"; // OK - different block
        break;
    }
}

// ==================== MODULE PATTERN ====================
// Using const for module exports
const MathUtils = {
    add: (a, b) => a + b,
    multiply: (a, b) => a * b,
    PI: 3.14159
};

// Can add new methods
MathUtils.subtract = (a, b) => a - b;

// But cannot reassign
// MathUtils = {}; // Error


// ==================== FINAL SUMMARY ====================
/*
KEY TAKEAWAYS:
1. Use const for everything that won't be reassigned
2. Use let for variables that need reassignment
3. Never use var in new code
4. const prevents reassignment, not mutation
5. All three are hoisted, but let/const have TDZ
6. Prefer block scope (let/const) over function scope (var)
*/


// Quick Reference Table

/*
| Feature         | var       | let       | const     |
|-----------------|-----------|-----------|-----------|
| Scope           | Function  | Block     | Block     |
| Reassign        | Yes       | Yes       | No        |
| Redeclare       | Yes       | No        | No        |
| Hoisting        | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |
| Temporal Dead Zone | No     | Yes       | Yes       |
| Global property | Yes       | No        | No        |
*/