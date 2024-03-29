class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{    //Teacher class can access user class
    constructor(username, email, password){
        super(username)   //In 05_call.js file, we had used " SetUsername.call(this, username) " to use username of setusername func. bt when we use class keywordthen "super"{user class constructor} keyword will create username variable and will be assigned username that is passes as argument inside super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")  //new keyword is imp.

chai.logMe()   //USERNAME is chai
const masalaChai = new User("masalaChai")

console.log(chai===masalaChai);   //  false

masalaChai.logMe()     //USERNAME is masalaChai

console.log(chai === Teacher);   //false
console.log(chai instanceof Teacher);  //true
console.log(chai instanceof User);  //true