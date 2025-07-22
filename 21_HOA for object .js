const  myObjec ={
    js:"javasccript",
    cpp:"c++",
    rb:"rubby",
    swift:"swift by"
}

// for(const [key,val] in myObjec){
//      console.log(`${key} shortcut is for :-- ${myObjec[key]}`)
// }

//  not working
// for(const [key,val] in myObjec){
//      console.log(`${key} shortcut is for :-- ${myObjec[val]}`)
// }

const programming =  ["js","py","py","math"]

// for(const [key,vale] in programming){
//      console.log(`${programming[vale]} and the `)
// }

//  value not work for array

 const map = new Map()  
//  Creates a new empty Map object in JavaScript.


map.set('IN',"India")
map.set('USA','united state of America')
map.set('cn',"Canada")

 for(const key in map){
     console.log(key);
 }

//  in not work for map
