const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);   //-> toString() is used to convery any value in to string.
// console.log(balance.toFixed(1));      // ->  toFixed() is used to take value upto defined number after decimal.

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));  // -> toPrecision()  is used to take precise value before decimal. 

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));  // -> toLocaleString()  this will convert the value into 'US' standerd way in commas (","), and toLocalString(en-IN) this will convert value into 'IN' standard way. --> for example -> 1000000 => 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));   //=> abs(absulute value) it convert negative value to positive
// console.log(Math.round(4.6));   // => used to round of value automatically 
// console.log(Math.ceil(4.2));    // => used to round of value automatically but it take ceiling value.
// console.log(Math.floor(4.9));   // => used to round of value automatically but it take floor value.
// console.log(Math.min(4, 3, 6, 8));  // => used to take minimum value
// console.log(Math.max(4, 3, 6, 8));  // => used to take maximum value

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)