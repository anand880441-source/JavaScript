// const - Cannot be redeclared or reassigned
const accountId = 144553;
// accountId = 23521; // ❌ ERROR: Assignment to constant variable
// const accountId = 99999; // ❌ ERROR: Identifier 'accountId' has already been declared

// let - Can be reassigned but not redeclared in same scope
let accountEmail = "anand@google.com";
accountEmail = "hc@hc.com"; // ✅ Allowed - reassignment
// let accountEmail = "new@email.com"; // ❌ ERROR: Cannot redeclare block-scoped variable

// var - Can be reassigned AND redeclared (problematic!)
var accountPassword = "12345";
accountPassword = "212121212"; // ✅ Allowed - reassignment
var accountPassword = "999999"; // ✅ Allowed but DANGEROUS - redeclaration
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// No keyword - Creates global property (NOT RECOMMENDED)
accountCity = "Jaipur"; // ❌ BAD PRACTICE: Implicit global variable
accountCity = "Ahmedabad"; // ✅ Works but pollutes global scope

// let without initialization - value is undefined
let accountState; // Value is 'undefined' by default
// console.log(accountState); // Output: undefined

// ==================== FIXED CONSOLE.TABLE USAGE ====================
//sevral way to print
// Method 1: Using an object (Recommended for named variables)
console.log("\n=== Method 1: Using Object ===");
console.table({
    accountId,
    accountEmail, 
    accountPassword,
    accountCity,
    accountState
});


// // Method 2: Using an array
// console.log("\n=== Method 2: Using Array ===");
// console.table([
//     accountId,
//     accountEmail,
//     accountPassword, 
//     accountCity,
//     accountState
// ]);

// // Method 3: With custom column names
// console.log("\n=== Method 3: With Custom Column Names ===");
// console.table([
//     { 
//         Variable: "accountId",
//         Value: accountId,
//         Type: "const",
//         CanReassign: "No",
//         CanRedeclare: "No"
//     },
//     { 
//         Variable: "accountEmail",
//         Value: accountEmail,
//         Type: "let", 
//         CanReassign: "Yes",
//         CanRedeclare: "No"
//     },
//     { 
//         Variable: "accountPassword",
//         Value: accountPassword,
//         Type: "var",
//         CanReassign: "Yes", 
//         CanRedeclare: "Yes (dangerous)"
//     },
//     { 
//         Variable: "accountCity",
//         Value: accountCity,
//         Type: "none (global)",
//         CanReassign: "Yes",
//         CanRedeclare: "Yes (global pollution)"
//     },
//     { 
//         Variable: "accountState",
//         Value: accountState,
//         Type: "let (uninitialized)",
//         CanReassign: "Yes",
//         CanRedeclare: "No"
//     }
// ]);

// // Method 4: Separate console.log for each (Alternative)
// console.log("\n=== Method 4: Separate Console Logs ===");
// console.log("accountId:", accountId);
// console.log("accountEmail:", accountEmail);
// console.log("accountPassword:", accountPassword);
// console.log("accountCity:", accountCity);
// console.log("accountState:", accountState);