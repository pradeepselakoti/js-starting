const tinderUsr = new Object()

//   console.log(tinderUsr)  {}

const tinderUser = {}

tinderUser.id = "123abc",
tinderUser.name = "Samay",
tinderUser.isLoggedIn= false


//    console.log(tinderUser)          { id: '123abc', name: 'Samay', isLoggedIn: false }


const regular ={
    email:"some@gmail.com",
    fullname:{
        userFullname:{
            name:"Pradeep",
            lastname:"Selakoti"
        }
    }
}

//   console.log(regular.fullname.userFullname)         { name: 'Pradeep', lastname: 'Selakoti' }

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}
const obj4 = {5: "e", 6:"f"}

const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)            { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj5 ={...obj1,...obj2}
//  console.log(obj5)           { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

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

// console.log(users[1].email)      h@gmail.com
//   console.log(tinderUser)        { id: '123abc', name: 'Samay', isLoggedIn: false }

//  console.log(Object.keys(tinderUser))      [ 'id', 'name', 'isLoggedIn' ]
//  console.log(Object.values(tinderUser))    [ '123abc', 'Samay', false ]
//  console.log(Object.entries(tinderUser))   [ [ 'id', '123abc' ], [ 'name', 'Samay' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))         true

const course = {
    coursename: "JS in Hindi",
    price:4555,
    courseInstrucutor: "Pradeep"
}

course.courseInstrucutor
const {courseInstrucutor} = course

// console.log(courseInstrucutor)   Pradeep

const {courseInstrucutor:instructor}= course
//  console.log(instructor)             Pradeep

// const navbar =({company})=>{

// }
// navbar(company = "Pradeep")

// {
//     "name":"Pradeep",
//     "course":"Btech",
//     "job":"Seeking"
// }

