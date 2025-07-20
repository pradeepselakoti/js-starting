// singleton
// Object Create

//object literal
const mySym = Symbol("key1")

const Juser = {
    name:"Pradeep",
    "full":"Pradeep Selakoti",
    [mySym]: "mykey1",
    age:18,
    location:"Jaipur",
    email:"Pradeep@google.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]
}

//  console.log(Juser.email)
 console.log(Juser['email'])

//   console.log(Juser["full"])
//   console.log(Juser[mySym])
//   console.log(Juser.mySym)
//  console.log(typeof mySym)

Juser.email = "Pradeep@gmail.com"

// Object.freeze(Juser)
Juser.email ="Pradeep@chatgpt.com"

//   console.log(Juser.email)

Juser.greeting = function(){
     console.log("Hello JS User")
}
Juser.greeting2 = function(){
     console.log(`hello my name is ${this.full}`)
}
 console.log(Juser.greeting())
 console.log(Juser.greeting2())
