// for loop
array = [10,5,6,7,8,9]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // if(element == 5)
    // console.log("5 is the best number")
    
    // console.log(element)
}

for( let i=0 ; i<10; i++){
    // console.log(`outer loop ${i}`)
    for( let j=0;j<array.length; j++){
        // console.log(`inner loop value ${j} and inner loop ${i}`)
        // console.log(i + '*' + j + '=' + i*j)
    }
}

//  break and continue

// for (let index = 0; index <= 20; index++) {
//     if(index==5){
//          console.log(`Deetected 5`)
//         break
//     }      
//     console.log(`Value of i is ${index}`)    
// }
for (let index = 0; index <= 20; index++) {
    if(index==5){
         console.log(`Deetected 5`)
        continue
    }      
    console.log(`Value of i is ${index}`)    
}