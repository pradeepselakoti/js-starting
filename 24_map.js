const myNums = [1,2,3,4,5,6,7,8,9]

const newNums = myNums.map( (num)=>{
    num+10 
})

// const newNums = myNums.map( (num)=>{
//     return num+10 
// })
console.log(newNums)


// chaining
// const newNums = myNums.map( (num)=>num*10)
//                       .map( (nm)=>nm+1)
//                       .filter( (num) => num >=40)
// console.log(newNums)

//  map - function alo take call back