// ES6
//class is a keyword in js

class User {
    constructor(username, email, password){  // constructor is a fn which gets call when we make new instances of it
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`;
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }

}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());    //   123abc
console.log(chai.changeUsername());     //CHAI

//behind the scene -- below code and above code give same output - below code is the illustration how js actually works-

function User1(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User1.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User1.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User1("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());    //123abc
console.log(tea.changeUsername());    //TEA