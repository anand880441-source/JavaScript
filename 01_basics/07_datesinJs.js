// Dates

let myDate = new Date()      //=> objest of date
// console.log(myDate.toString());         //Fri Dec 19 2025 19:57:09 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());     //Fri Dec 19 2025
// console.log(myDate.toLocaleString());   //19/12/2025, 7:57:09 pm
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)            //23/1/2023, 12:00:00 am  month start with zero in js
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)      //23/1/2023, 5:03:00 am
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);       // gire output in ms
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// console.log(`${newDate.getDay()} and the time `)

newDate.toLocaleString('default', {
    weekday: "long",
    
})

