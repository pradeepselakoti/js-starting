const coding =  ["js", "ruby", "python"]

coding.forEach( function (item) {
    // console.log(item)
})

coding.forEach( (val)=>{
    //  console.log(val)
})

// function printMe(item){
//     console.log(item)
// }
//  coding.forEach(printMe)

coding.forEach( (item, index, arr)=>{
    // console.log(item, index, arr)
})

const myCoding =[
    {
        languagename:"Js",
        languagefilename:"javascript"
    },
    {
        languagename:"py",
        languagefilename:"python"
    },
    {
        languagename:"ry",
        languagefilename:"ruby"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.languagefilename)
})