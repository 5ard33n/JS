// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)


//NAMED IIFE
(function MESSAGEPNT(){
    console.log("DATABASE CONNECTED");
}) ();


// IIFE in arrow function

( (name) => {
    console.log(`DATABASE TWO CONNECTED ${name}`);
} )("FARDEEN");