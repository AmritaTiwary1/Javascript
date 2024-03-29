function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)  //it means , now when the setUsername fn will be called , then this.username => means createUser.username
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
/*
called
createUser { username: 'chai', email: 'chai@fb.com', password: '123' }  ==> we don't create username variable in this object
 bt when we write setUsername.call(this,username) then in "this" context {createUser's context} ,username will be created 
*/


// WHILE MISSING OUT SOME SYNTAX -
function createUser1(username, email, password){
    SetUsername(username);
   
    this.email = email
    this.password = password
}
const chai1 = new createUser1("chai1", "chai@fb.com", "123")
console.log(chai1);
/*
called
createUser1 { email: 'chai@fb.com', password: '123' }
*/