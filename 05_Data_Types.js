// Primitive

// 7 types : String, Number , Boolean, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

// const isLoggedIn = false
 const outsideTemp = null

let userEmail ;
// let useremail = undefined // both are same

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id  === anotherId)

const bigNumber = 32356561156115n



// Reference (Non-Primitive)

// Array, Objects Functions

const heros = ["Shaktiman", "nagraj", "doga"]
let myObj = {
    name:"Pradeep",
    age:22,
}

const myFunction = function(){
    console.log("Hello world")
}

console.log(typeof outsideTemp)
console.log(typeof score)