class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username: ${this.username}`)
    }

   static createId(){
        return `123`
    }
}

const pradeep = new User("pradeep")
// console.log(pradeep.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.logMe())
iphone.logMe()

//  Static keyword -- we cannot use the static function, variable ..etc. and children also can't use