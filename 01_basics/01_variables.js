const accountId = 12345       //cant be changed
let accountEmail = "Zero01@gmail.com"           // can be changed
var accountpassword = "9226"                    // can be changed
accountCity = "Jharkhand"                       // can be changed
let accountState;
// accountId = 2

/*
 Prefer not to use var
 Because of issue in black scope and functional scope

*/
console.log(accountId);
console.table([accountId, accountEmail, accountpassword, accountCity, accountState])
