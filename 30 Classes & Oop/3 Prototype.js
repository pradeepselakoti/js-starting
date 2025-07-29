// let myName = "pradeep    "
// let myChannel = "chai    "

// console.log(myName.trueLength)

const myHeros = ["thor", "spiderman"]

let  heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getspiderman:function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.pradeep = function(){
    console.log(`Pradeep is present in alll object`);
}

Array.prototype.heyPradeep =function(){
    console.log('Pradeep is saying hello')
}

// heroPower.pradeep()
// myHeros.pradeep()
// myHeros.heyPradeep()
// heroPower.heyPradeep()  error

//  Inheritance

const User = {
    name: "chai",
    email:"chai@google.com"
}

const Teacher = {
    makevieo : true
}

const TeacherSupport = {
    isAvailable : true
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime : true,
    __proto__ : TeacherSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeacherSupport, Teacher)

let anotherUseRName = "chaiAurCode      "

String.prototype.trueLength = function(){
     console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`)
}

anotherUseRName.trueLength() 
"Pradeep".trueLength()