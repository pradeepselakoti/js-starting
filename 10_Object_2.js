// const tinderUser = new Object()

// console.log(tinderUser)

const tinderUser = {}

tinderUser.id = "123abc",
tinderUser.name = "Samay",
tinderUser.isLoggedIn= false


//  console.log(tinderUser)


const regular ={
    email:"some@gmail.com",
    fullname:{
        userFullname:{
            name:"Pradeep",
            lastname:"Selakoti"
        }
    }
}

//  console.log(regular.fullname.userFullname)

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}
const obj4 = {5: "e", 6:"f"}

const obj3 = Object.assign({},obj1,obj2)
//  console.log(obj3)

const obj5 ={...obj1,...obj2}
// console.log(obj5)

const users =[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },{
        id:1,
        email:"h@gmail.com"
    }
]

// console.log(users[1].email)
//  console.log(tinderUser)

//  console.log(Object.keys(tinderUser))
//  console.log(Object.values(tinderUser))
//  console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename: "JS in Hindi",
    price:4555,
    courseInstrucutor: "Pradeep"
}

// course.courseInstrucutor

const {courseInstrucutor} = course
// console.log(courseInstrucutor)

const {courseInstrucutor:instructor}= course
// console.log(instructor)

// const navbar =({company})=>{

// }
// navbar(company = "Pradeep")

// {
//     "name":"Pradeep",
//     "course":"Btech",
//     "job":"Seeking"
// }