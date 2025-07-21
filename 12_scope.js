// let a = 10
// const b = 20
// var c = 30

// console.log(a)
// console.log(b)
// console.log(c)

// var c =300
// a =300

if(1){
let a = 10
const b = 20
var c = 60
// c=30
    // console.log("Inner:",c)
}
// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "Pradeep"

    function two(){
        const website = "utube"
        console.log(username);
    }
    //   console.log(website)

    two()
}
//   one()

if(true){
    const username = "Pradeep"
    if(username === "Pradeep"){
        const website = " youtube"
        console.log(username + website)
    }
    //  console.log(website)
}
//  console.log(username)

//  ++++++++++++++++++++++   Intresting  +++++++++++++++++++++++++++++++

function add(num1){
    return num1 +1
}
// console.log(add(5))


// console.log(addOne(5)) 

function addOne(num){
    return num +1
}

// addTwo(5)

const addTwo = function(num){
    return num + 2
}

