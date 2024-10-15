//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Fardeen"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {


  email: "Sleepy@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Fardeen",
      lastname: "Naseem"
    }
  }
}

// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstname)
// console.log(regularUser.fullname.userfullname.lastname)


const obj1 = {1: "A", 2: "B", 3: "C"}
const obj2 = {4: "D", 5: "E", 6: "F"}
const obj3 = {7: "G", 8: "H", 9: "I"}

// const superiorObj = {obj1, obj2}
// const superiorObj = Object.assign(obj1,obj2)
// const superiorObj = Object.assign({}, obj1, obj2, obj3)  //.assign(source, target1, target2, target3)


// const superiorObj = {...obj1,...obj2,...obj3}
// console.log(superiorObj);


const users =[
  {
    id: 1,
    email: "Fardeen@gmail.com" 
  },
  {
    id: 2,
    email: "Ayaan@gmail.com" 
  },
  {
    id: 2,
    email: "BladeWolf@gmail.com" 
  },
]

// console.log(users[1].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));



console.log(tinderUser.hasOwnProperty("id"));
console.log(tinderUser.hasOwnProperty("idx"));


