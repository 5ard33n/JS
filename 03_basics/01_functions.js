
function sayMyName(){
    console.log("H");
    console.log("E");
    console.log("I");
    console.log("S");
    console.log("E");
    console.log("N");
    console.log("B");
    console.log("E");
    console.log("R");
    console.log("G");
}

// sayMyName()
                          //Parameters//
// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

                                   
//addTwoNumbers(3,4)//Arguments//




// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

// const result =addTwoNumbers(3,4)

// console.log("Result :", result);



function addTwoNumbers(number1, number2){

 //Method1
    // let result = number1 + number2
    // console.log("Fardeen");
    // return result
    // console.log("Fardeen");   //wont run after return is used
    
 //Method2
    return number1 + number2
}

const result = addTwoNumbers(3,4)

// console.log("Result :", result);



// function loginMessage(username = "sam"){
//         // if (username === undefined) //same
//         // if (!username) {
//         //     console.log("Please Enter A Username")
//         //     return
//         // } 
//          return `${username} logged in\n Hello ${username}`
    
// }

// // console.log(loginMessage("Fardeen"));
// console.log(loginMessage());




                              //  this is not spread but restoperator here
// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(1,4,57,89,80));


// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

// console.log(calculateCartPrice(10,20,30,40,50));




// const user = {
//     username: "Fardeen",
//     rank: 199
// }

// function objHandle(anyObject){

//     console.log(`username is ${anyObject.username} and rank ${anyObject.rank}`);

// }

// objHandle(user)


// objHandle({
//     username: "Ayaan",
//     rank: 1
// })



const Arry = [10, 20, 30, 40, 50]

function returnSecondValue(Ary){
    return Ary[1]
}

// console.log(returnSecondValue(Arry));
console.log(returnSecondValue([347, 500, 4560]));
