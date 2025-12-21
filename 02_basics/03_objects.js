// singleton
// Object.create //-> a singleton meathod

// object literals

const mySym = Symbol("key1")
// console.log(mySym);

const JsUser = {
    name: "SPINO",
    "full name": "ONWPOWER SPINO",  // -> this type of key cannot be accessable with "." , thats why we use square notation to excess that value "["key_name"]"
    [mySym]: "mykey1",    //-> using symbol as a key
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])  //-> alternate way to excess.
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  //-> by freezeing the value it could not be changed.
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){     
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());