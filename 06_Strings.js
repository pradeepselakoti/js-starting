const name ="pradeep"
const repoCount = 50

//console.log(name+ repoCount+" Value")  pradeep50 value

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gamename = new String('hello-praddeep-dep')

// console.log(gamename[0]);  h

// console.log(gamename.__proto__);

// console.log(gamename.length) 19
// console.log(gamename.toUpperCase())  HELLO-PRADDEEP-DEP

// console.log(gamename.charAt(4))    o
// console.log(gamename.indexOf('l')); 2

const newString = gamename.substring(-3,4) // in this we cannot start with (-) value ; it will ignore it and start with 0
//console.log(newString) hell

const anothername = gamename.slice(-2,4)
console.log(anothername)

const newStringOne = "  pradeep  "
// console.log(newStringOne);        pradeep
// console.log(newStringOne.trim()) pradeep

const url = "https://pradeep.com/pradeep%20selakoti"

// console.log(url.replace('%20', '-')) https://pradeep.com/pradeep-selakoti

// console.log(url.includes('pradeep')) true

// console.log(gamename.split('-'))    [ 'hello', 'praddeep', 'dep' ]

