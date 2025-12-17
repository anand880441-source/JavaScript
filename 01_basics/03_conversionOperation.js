let score = "33"
let score1 = "33abc"  // => this is string formet which contains number and alfabets.
// console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)  // => this will convert score string into Number "33" => 33. 
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

let valueInNumber1 = Number(score1)  // => it will convert score string into Number "33abc" => 'NaN'. 
// console.log(typeof valueInNumber1);  // =>This wil show the type of converted value of string as Number but when we console actual converted value it will show NaN(Not a Number).
// console.log(valueInNumber1);  //OutPut : NaN but data type is Number.

//any string => NaN
// null => 0
// undefine => NaN
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " spino"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);      // Out : 12
// console.log(1 + "2");      // Out : 12
// console.log("1" + 2 + 2);  // Out : 122
// console.log(1 + 2 + "2");  // Out : 32

// console.log( (3 + 4) * 5 % 3); // 3+4 =7; 7*5 = 35;  35 %3 = 2(remainder).

// console.log(+true);  // Out : 1
// console.log(+"");    // Out : 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion