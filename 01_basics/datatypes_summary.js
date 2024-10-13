// // Primitive //

// // 7 types : String, Number, Boolean, Null, Undefined, Symbol, Bigint

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail = undefined 
// // or let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);


// const bigNumber = 71298471896578263587236n



// //Reference (Non-Primitive)

// // Array, Object, Functions

// const superheroes = ["SpiderMan", "SuperMan", "BatMan"]

// let myObj = {
//     name: "Fardeen",
//     Age : 18,
// }

// const myFunction = function(){
//     console.log("Hello World");
// }

// console.log(typeof bigNumber);
// console.log(typeof superheroes);
// console.log(typeof myObj);
// console.log(typeof myFunction);
// console.log(typeof id);



// https://262.ecma-international.org/5.1/#sec-11.4.3



/* ******************************************************************************** */

//Stack(Primitive)(Gives a copy of the original), Heap(Non-Primitive)(Gives a reference)


// let myName = "Fardeen"

// let anotherName = myName
// anotherName = "Naseem"

// console.log(myName);
// console.log(anotherName);

// let userOne = {
//     email: "xyz@gmail.com",
//     upi: "zyz@upi"
// }

// let userTwo = userOne
// userTwo.email= "123@gmail.com"

// console.log(userOne);
// console.log(userTwo);

