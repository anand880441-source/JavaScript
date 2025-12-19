// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(typeof myArr2)  //-------
                               //      |---> Object
// console.log(typeof myArr)   //-------
// console.log(myArr[1]);

// Array methods

// myArr.push(6)                 //add value to arr at the last index
// myArr.push(7)                 
// myArr.pop()                   //remove last value of array

// myArr.unshift(9)              //insert value at the 0th index of array
// myArr.shift()                 //remove value from the 0th index of array


// console.log(myArr.includes(9));    //return => true/false if include then true else false
// console.log(myArr.indexOf(3));     //give the index of specific value if the value doesnot exist return -1

// const newArr = myArr.join()          //it will change the array into string.

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  //this will give deep copy of array it does not affect the actual array and it does not include last value of slice.

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  //this will give shallow copy of array it affect the actual array and it does include last value of splice.

console.log("C ", myArr);
console.log(myn2);
