/*const user = {     // this is a object in js
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
    console.log("Got user details from database");
      // console.log(username);    //error : username is not present inside function , so function dont know about username, but when we write this.username, it means it is talking about the outer box - object context
       //  console.log(`Username: ${this.username}`);          //this means "object context"   
      //  console.log(this);                   //output : all variables and function inside user object 
    }
}

console.log(user.username)  //hitesh
console.log(user.getUserDetails);    //[Function: getUserDetails]
console.log(user.getUserDetails());  //Got user details from database as op when we comment all the console.log statement inside user
console.log(this);   //{}
*/


function User(username, loginCount, isLoggedIn){
    this.username = username;     //here this.username means inside user function context, username variable will be created and willl be equal to usernme
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

       }
 return this   //this means all the variables,fn in object
}

const userOne =User("hitesh", 12, true)  //when no "NEW" keyword, then it will start adding new variables to all other properties of object 
//console.log(userOne);
/*.........................  //many more properties of object
......  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  username: 'hitesh',
  loginCount: 12,
  isLoggedIn: true,
  greeting: [Function (anonymous)]
}
*/
const userTwo = User("ChaiAurCode", 11, false)

//console.log(userOne);   //first thnk , what should be the output , userOne have LOGINCOUNT = 12,ISLOGGEDIN = TRUE , bt after running "const userTwo = User("ChaiAurCode", 11, false)" , it changes the value inside userOne
/*
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  username: 'ChaiAurCode',
  loginCount: 11,
  isLoggedIn: false,
  greeting: [Function (anonymous)]
}
*/ 

//=== that why we use NEW KEYWORD , WHICH MAKE NEW INSTANCES EVERY TIME , AND DONT OVERWRITE 


//console.log(userOne.constructor);   //[Function: Object]
//console.log(userTwo);
/*.....................
.....
 .....performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  username: 'ChaiAurCode',
  loginCount: 11,
  isLoggedIn: false,
  greeting: [Function (anonymous)]
}
*/


function User1(username, loginCount, isLoggedIn){
    this.username = username;     //here this.username means inside user function context, username variable will be created and willl be equal to usernme
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

       }
 return this   //this means all the variables,fn in object
}

const userOne1 = new User1("hitesh", 12, true)  //when no "NEW" keyword, then it will start adding new variables to all other properties of object 
//console.log(userOne1);

/*User1 {
  username: 'hitesh',
  loginCount: 12,
  isLoggedIn: true,
  greeting: [Function (anonymous)]
}
*/
const userTwo1 = new User1("ChaiAurCode", 11, false)

//console.log(userOne1);  
/*User1 {
  username: 'hitesh',
  loginCount: 12,
  isLoggedIn: true,
  greeting: [Function (anonymous)]
} 
*/ 


console.log(userTwo1);
/*}
User1 {
  username: 'ChaiAurCode',
  loginCount: 11,
  isLoggedIn: false,
  greeting: [Function (anonymous)]
}

*/