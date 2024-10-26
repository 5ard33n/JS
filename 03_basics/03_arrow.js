const user = {
    username: "Fardeen",
    rank: 10,
    greetingMEssage: function(){
        // console.log(`Hello ${this.username} Welcome to our Site`);
        console.log(this);
    }
}

// user.greetingMEssage()
// user.username = "Sam"
// user.greetingMEssage()
// console.log(this);

// in browser if we run this we wont get an empty obj but we will get a global object called window

// but if we run this keyword in a function in node environment we get some values 
// for example

// function coffee(){
//     let username = "FArdeen"
//     console.log(this.username);    //undefined  OUTPUT       cant be run in functions
// }
// coffee()

// const coffee = function (){
//     let username = "FArdeen"
//     console.log(this.username);        //UNDEFINED OUTPUT       same as the other
// }

// coffee()


//                                THIS IS ARROWW FUNCTIONNNN


const coffee =  () => {
    let username = "FArdeen"
    // console.log(this.username);      //Undefined OUTPUT 
    console.log(this);       
}
// coffee()



// Basic arrow function

// const addTwo = (n1, n2) => {

//     return n1 + n2
// }

// console.log(addTwo(3,4))



//Implicit return arrow function
//if return is not used its called implicit return arrow function

// // const addTwo = (n1, n2) => n1 + n2      Method 1
// const addTwo = (n1, n2) => (n1 + n2)  //MEthod 2

// console.log(addTwo(3,4))

// Explicit return arrow function
//if you use return its called emplicit return arrow function
// const addTwo = (n1, n2) => {
//     return n1 + n2
// }
// console.log(addTwo(5,6));

//if we use parenthesis () it is automatically returned
//if scope {} we should write return to return the function

//OBJECT RETURN IN ARROW FUNCTION
const addTwo = () => ({username: "fardeen"})  

console.log(addTwo());




// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(() => {})