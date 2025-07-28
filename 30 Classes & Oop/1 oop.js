const user = {
    username:"Pradeep",
    degree:"B.trvh",

    getuserDetails: function(){
        // console.log("get user details")
        console.log(`username:${this.username}`)
        console.log(this)
    }
}

// console.log(user.username)  
// console.log(user.getuserDetails())
// console.log(this)  {}

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username

    this.greeting = function(){
        console.log(`welcome ${this.username}`)
    }
    return this
}

const userOne = new User("oradeep",12,true)
const userTwo = new User("chaiAurCode",11, false)
// console.log(userOne.constructor)
 console.log(userTwo)