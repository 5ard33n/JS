
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



function loginMessage(username){
    return `${username} logged in\n Hello ${username}`
    
}

console.log(loginMessage("Fardeen"));
