
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor)

// console.log(Math.PI) 

const chai = {
    name:"Ginger chai",
    price:250,
    isAvailable:true,

    orderchai : function(){
        console.log("chai nhi bani")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai, 'name',{
    // writable:false,
    enumerable:true
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){    
        console.log(`${key} : ${value}`)
    }
}