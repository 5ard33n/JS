//DATES (OBJECT)

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());   //useful
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());  //useful
// console.log(myDate.toLocaleString());      //useful
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,11,10,5,20)   //Months starts with 0 in js s0 0 is janand 11is dec
// let myCreatedDate = new Date("2023-01-12") (yy-mm-dd)  //2nd synatX
let myCreatedDate = new Date("01-12-2024") //(mm-dd-yy)   //3nd synatX
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime())   in millisec time
 

// // console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000)); //in sec


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());  //sunday 0 monday 1
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth()); //etc


    console.log(newDate.toLocaleString());
    console.log(newDate.toLocaleString('default',{
        weekday: "long",
        month: "long",
    }));
    




