// Primitive

// 7 types : String, Number , Boolean, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

// const isLoggedIn = false
 const outsideTemp = null

let userEmail ;
// let useremail = undefined // above and down both are same

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id  === anotherId)
// false 

const bigNumber = 32356561156115n



// Reference (Non-Primitive)

// Array, Objects Functions

const heros = ["Shaktiman", "nagraj", "doga"]
let myObj = {
    name:"Pradeep",
    age:22,
}

// const myFunction = function(){
//     console.log("Hello world")
// }

//  console.log(typeof outsideTemp)  object
// console.log(typeof score)  number


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// stack (Primitive), Heap (Non-Primitive)

let ytname = "pradeepdotcom"

let anothername = ytname

anothername = "chai"

// console.log(ytname)  pradeepdotcom
// console.log(anothername)  chai

let userOne = {
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "read@gmail"

// console.log(userOne)  read@gmail, user@ybl
// console.log(userTwo)  read@gmail, user@ybl