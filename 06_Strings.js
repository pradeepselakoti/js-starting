const name ="pradeep"
const repoCount = 50

//console.log(name+ repoCount+" Value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gamename = new String('hello-praddeep-dep')

// console.log(gamename[0]);

// console.log(gamename.__proto__);

// console.log(gamename.length)
// console.log(gamename.toUpperCase())

// console.log(gamename.charAt(4))
// console.log(gamename.indexOf('l'));

const newString = gamename.substring(-3,4) // in this we cannot start with (-) value ; it will ignore it and start with 0
//console.log(newString)

const anothername = gamename.slice(-2,4)
//console.log(anothername)

const newStringOne = "  pradeep  "
console.log(newStringOne);
console.log(newStringOne.trim())

const url = "https://pradeep.com/pradeep%20selakoti"

console.log(url.replace('%20', '-'))

console.log(url.includes('pradeep'))

console.log(gamename.split('-'))

