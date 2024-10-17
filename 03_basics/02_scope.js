// there are three types of scopes
/* block scope
   global scope      
   function scope
*/


//var c = 300                               //global scope
let a = 300
if (true) {
    let a = 10       // block scope
    const b = 20    //block scope
    // console.log("INNER: ", a);           
     
}



// console.log(a);
// console.log(b);
// console.log(c);

