const myNums = [1,2,3,4,5]

// const myTotal = myNums.reduce( function (acc, curval) {
//     console.log(`acc:${acc} and curval ${curval}`)
//     return acc+ curval
// },0)

const myTotal = myNums.reduce( (acc,curval) => acc+curval,0)

// console.log(myTotal)

const shoppingCar = [
    {
        itemNamw: "JS course",
        price: 5000
    },
    {
        itemNamw: "py course",
        price: 2000
    },
    {
        itemNamw: "mdb course",
        price: 3000
    },

]
const price = shoppingCar.reduce((acc ,item) => acc + item.price ,0)

console.log(price)