// // const score = 100;
// // console.log(score);

// // const balance = new Number(1000);
// // console.log(balance);
// // console.log(balance.toString());
// // console.log(balance.toString().length);
// // console.log(balance.toFixed(1));   //digits after point // ex => 100.0etc

// const otherNum =  58.6
// console.log(otherNum.toPrecision(2)); //roundsd off

// const num1 = 100000.560
// console.log(num1.toLocaleString('en-IN')) //returns values in commas //en-IN changes into indian format





/**************************************  Maths  *****************************************/


// console.log(Math);
// console.log(Math.abs(-199));       //positive stays positive
// console.log(Math.round(4.5));
// console.log(Math.ceil(8.3));     //round of to increasing number
// console.log(Math.floor(8.7));     //round of to decreasing number
// console.log(Math.sqrt(16));     
// console.log(Math.pow(2,3));     //2 to the power 3
// console.log(Math.min(2,4,7,6,1));       //gives min 
// console.log(Math.max(2,5,8,10,11));     //gives max



console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20


//formula
console.log(Math.floor(Math.random()* (max - min + 1)) + min);
