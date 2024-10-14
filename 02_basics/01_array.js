//Array
// shallow copy = properties who same reference point
//deep copy =  properties who does not share the same reference point
// array copy option creates shalllow copies

// const Arr1 = [1,2,3,4,5,6]
// const Arr2 = ["RyanReynolds","RyanGosling", "JakeGyrenhall"]
// const Arr3 = new Array(3,50,78)
// const myArr = [1, 4, 70, true, "fardeen"]
// console.log(myArr[4]);


//Array methods

// (myArr.push(7));
// (myArr.push(8));
// (myArr.pop());  //last value delete
// myArr.unshift(9);  //adds the value in the start
// myArr.shift();  //REMOVES THE VALUE FROM THE START


// console.log(myArr.includes(true))
// console.log(myArr.indexOf(true))
// console.log(myArr.indexOf(9)) //  -1 output for the value that dont exist 

// const anotherArr = myArr.join();

// console.log(myArr);
// console.log(typeof myArr);
// console.log(anotherArr);
// console.log(typeof anotherArr); // OUTPUT TYPEOF  anotherArr => string



// Slice and Splice

const myArr2 = [0, 1, 2, 3, 4, 5]

console.log("A ", myArr2);

const myn1 = myArr2.slice(1, 3)
console.log(myn1);                 //slice dont manipulate the arrray (range is not included)

console.log("B ", myArr2);
const myn2 = myArr2.splice(1, 3)   //splice manipulatesthe Arr   ((range is included))
console.log(myn2);

console.log("C ", myArr2);  
