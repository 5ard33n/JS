const name = "Fardeen"
const age = 18

// console.log(name + age + "value");        out dated syntax
console.log(`My name is ${name} and my age is ${age}.`)


const gameName = new String ('Fardeen-18-2005')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(3));
console.log(gameName.indexOf('r'));
const STR1 = gameName.substring(0, 9);  //ignores negative values
console.log(STR1);

// const anotherSTR = gameName.slice(0,9)
const STR2 = gameName.slice(-5,-1);
console.log(STR2);

const STR3 = "   FARDEEN   "
console.log(STR3);
console.log(STR3.trim());           //TRIM START AND END ALSO EXIST
 
const STR4 = 'https://fardeen.com%20/fardeen-naseem'

console.log(STR4.replace('%20',"-"));
console.log(STR4);
console.log(STR4.includes("fardeen"))
console.log(STR4.includes("nokia"))


STR5 = 'Fardeeen@2006@18@white'
console.log(STR5.split('@'))