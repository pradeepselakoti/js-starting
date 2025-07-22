const userEmail = []

if(userEmail){
    console.log("Got user Email")
}else{
    console.log("Dont't have user Email")
}

// false values
//  false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value
// "0", 'false, [], {}, function(){}

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.values(emptyObj).length ===0){
    console.log("Object is empty")
}

// false ==0 true

// false ==" "  true

// 0=='' true

//  Nullish Coalescing Operator (??) : null undefined

let val, val2
val = null ?? 10

val2 = null ?? undefined ?? 20

console.log(val2)

//  Terniary Operator

// condition ? true :false

const iceTeaPrice = 10

iceTeaPrice>= 100 ? console.log("iceTeaPrice"): console.log("not")


