const name = "spino"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('spino-cg-com') // new -> using object
// console.log(typeof gameName);  // type => object


// console.log(gameName[0]);
// console.log(gameName.__proto__) // Out : {}


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));  //to check what is at the second index
console.log(gameName.indexOf('h'));  //to check the value at perticular indrex

const newString = gameName.substring(0, 4) //it will give spin (up to index 3), 4 is not include  -> negative value is not allow if we give it still start from 0.
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);


/*
Simple Comparison Table for substring() and slice().
Feature	                 substring()	         slice()
Negative indices	     Treated as 0	         Counts from end of string
start > end	             Swaps parameters	     Returns empty string
Method origin	         String-specific	     Also works with arrays
Usage with arrays	     ❌ No	               ✅ Yes
*/

const newStringOne = "   spino    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/onepwr%20spino"

console.log(url.replace('%20', '-'))

console.log(url.includes('divon'))

console.log(gameName.split('-'));