const user = {
    username:"Pradeep",
    price:'999',
    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`);
        //  console.log(this)

    }
}

// user.welcomeMessage()
user.username = "klkl"
// user.welcomeMessage()

// console.log(this)  
// {}
//  window is the global object window{}

// function chai(){
//     let username = "pradee"
//     console.log(this.username)  

//     // 'this' can't be used to the function and it can be used to only objects
// }

// chai()

// const chai = function chai(){
//       let username = "pradee"
//         console.log(this.username)   same here
// }

// chai()

// const chai = () =>{
//        let username = "pradee"
//          console.log(this.username)    same here
// }
// chai()


// Explicit
// const addTwo =(n1,n2) =>{        
//     return n1+ n2
// }

// console.log(addTwo(3,4))

//  Implicit 
// const addTwo =(n1,n2) =>  n1+ n2

const addTwo =(n1,n2) =>  ({username:"Pradeep"})


// console.log(addTwo(3,4))

