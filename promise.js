
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // Do calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

//   2nd promise

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

//  3rd promise

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Pradeep", email: "chai@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Pradeep", id:123})
        }else{
            reject('Error:Something went wrong')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("finally , the promise is done")
})


//  promise 5

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Pradeep", id:123})
        }else{
            reject('Error:JS went wrong')
        }
    },1000)
})
         
async function consumePromiseFive(){
     try {
        const response = await promiseFive
        console.log(response)
     } catch (error) {
        console.log(error)
     }

}    

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data)

//     } catch (error) {
//         console.log("E: ",error)
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((user)=>{
    console.log(user)
})
.catch((error)=> console.log(error))