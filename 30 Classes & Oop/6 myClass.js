// // ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai =  new User("pradeep", "pradeep@gmail.com", "123")
// console.log(chai.encryptPassword())
// console.log(chai.changeUsername())

// console.log(chai)

//  behind the scene

function User(username, email, password){
    this.username = username;
        this.email = email;
        this.password = password
}
User.prototype.encryptPassword = function(){
    // return `${this.password}abc`
    console.log(`${this.password}abc`)
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("pradeep", "pradeep@gmail.com", "123")

// console.log(tea.encryptPassword())
console.log(tea.changeUsername())
tea.encryptPassword()