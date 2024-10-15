//singleton
//object.create

// object literals
mySym = Symbol("key1")

const userJS = {
    name: "Fardeen",
    "full name" : "Fardeen Naseem",
    // mySym : "mykey1",
    [mySym] : "mykey1",
    age:18,
    email: "fardeen123@google.com",
    isLoggedIn: false,
    lastLoggedIn: "Monday"
}

// console.log(userJS.email);
// console.log(userJS["email"]);
// console.log(userJS["full name"]);
// // console.log(typeof userJS.mySym);
// console.log(userJS[mySym]);


// userJS.email = "freddy@gmail.com"
// Object.freeze(userJS)    //cant overwrite after this
// userJS.email = "freddy3928948@gmail.com"
// console.log(userJS.email);

userJS.greetings = function(){
    console.log("Helloo");
}
userJS.greetingsTwo = function(){
    console.log(`Helloo JS user, ${this.name}`);
}
console.log(userJS.greetings);
console.log(userJS.greetings());
console.log(userJS.greetingsTwo);
console.log(userJS.greetingsTwo());

