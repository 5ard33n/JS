// there are three types of scopes
/* block scope
   global scope      
   function scope
*/


// //var c = 300                               //global scope
// let a = 300
// if (true) {
//     let a = 10       // block scope
//     const b = 20    //block scope
//     // console.log("INNER: ", a);           
     
// }



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Fardeen"

    function two(){
        const website = "youtube"
        console.log(username);               //closure = as the two function is accesssing one function
    }
    // console.log(website);

    //  two()

}

// one()



// if (true) {
//     const username = "fardeen"
//     if (username === "fardeen") {
//         const website = " youtube"
//         console.log(username + website);
//     }
//     // console.log(website);
//     console.log(username)
// }
// // console.log(username)




//=========================== INTERESTING ================================//
console.log(addone(5))
function addone(num) {
    return num + 1
}

// addone(5)

// here you are able to access coz the function isnt assigned to the variable

//This type of function is called expression
// console.log(addtwo(5));

// const addtwo = function(num){
//     return num + 2
// }

// addtwo(5)

//you cant access the function before declaration if you had hold it in a variable