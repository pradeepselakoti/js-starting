function sayMyName(){
    console.log("P")
    console.log("R")
    console.log("A")
    console.log("D")
    console.log("E")
}

// sayMyName()

function addTwoNm(num1 , num2){
    console.log(num1 + num2)
}

// console.log(addTwoNm(3,null))

function addTwoNum(num1 , num2){
    let result = num1+num2
    // return result
     console.log("RAD")

    return num1+num2
}   


const result = addTwoNum(4,5)
//    console.log("Resr:",result)  

// RAD
// Resr: 9

function loginUserMessage(username = 'sam'){
//     // if (!username)  or 
     if(username===undefined){
        console.log("Please enter a username")
        return

    }
    return `${username} just logged in`
}
 console.log(loginUserMessage())
//  sam just logged in