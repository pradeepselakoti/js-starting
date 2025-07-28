function multilplyBy5 (num){
    // this.num = num
    return num*5
}

multilplyBy5.power = 2

console.log(multilplyBy5(5))
console.log(multilplyBy5.power)
console.log(multilplyBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const chai  = new createUser("chai", 25)
const tea = createUser("tea", 250)

 chai.printMe()

//  JS doesn't give the contructor function through "classes" , it gives through the "new" keyword
