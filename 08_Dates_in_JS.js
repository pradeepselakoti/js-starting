// Dates

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toJSON())
// console.log(myDate.toISOString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())

// console.log(typeof myDate)

let myCreatedDate = new Date(2025 , 7, 18)
// console.log(myCreatedDate.toDateString())


const arr = ["mango", 98, "jiiji"]
//console.log(arr[3])

let MyTimeStamp = Date.now()
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate.getMonth()+1)
// console.log(newDate.getDay())

const update = newDate.toLocaleString('default',{
    weekday:"long"
})

console.log(update)