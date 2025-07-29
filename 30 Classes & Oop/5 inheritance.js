class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME IS ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added byy ${this.username}`)
    }
}

const chai = new Teacher("pradeep", "pradeep@gmail.com", "123456")
console.log(chai)

chai.addCourse()

const masalaChai = new User("pradeepss")
//  masalaChai.addCourse()

masalaChai.logMe()
// console.log( chai === masalaChai)  falsee

// console.log(chai instanceof User)  true
// console.log(masalaChai instanceof Teacher)  false