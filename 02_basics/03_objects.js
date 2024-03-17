//object can be of 2 ways : literal , constructor
//singleton
//INTERVIEW QUESTIONS : declare symbol outside and use it inside object

const sym1 = Symbol("keys1");
const sym2 = Symbol("keys2");


let jsUser = {//object literals
 name : "amrita",
 [sym1] :"keys1",   //using square bracket in key means it is symbol 
 age : 18,
 location : "jaipur",
 lastLoginDay : ["mon ", "sat"],
 "email"  : "mahadev"
};  

myArr = ["h " , "i "];
myArr[1]; //we can access array in this way bt cant access object

// console.log(jsUser.name);    //amrita
// console.log(jsUser.email);   //mahadev
// console.log(jsUser["age"]);   //18   :two ways to access key of object by - dot and by using square bracket
// console.log(jsUser[sym1]);  //keys1
// console.log(typeof jsUser[sym1]);   //string

jsUser.email="3";  //change value of key
//console.log(jsUser);   
/*op --- {
  name: 'amrita',
  age: 18,
  location: 'jaipur',
  lastLoginDay: [ 'mon ', 'sat' ],
  email: '3',
  [Symbol(keys1)]: 'keys1'         //here , it is symbol
} */

Object.freeze(jsUser);      //freeze is func which allow to not make changes directly on main code
jsUser.age = 20;   // trying to replace
//console.log(jsUser);
/* 
{
  name: 'amrita',
  age: 18,
  location: 'jaipur',
  lastLoginDay: [ 'mon ', 'sat' ],
  email: '3',
  [Symbol(keys1)]: 'keys1'
} */

jsUser.newKey = "dev";
//console.log(jsUser.newKey); //undefined bcoz we had freeze our object , we need to unfreeze it
//console.log( Object.isFrozen(jsUser) );    //true 
//so to unfreeze it : we can do two thing , first comment the Object.freeze(jsUser) , second way is to make new object and run for loop in jsUser and copy it in newObj and then assign (jsUser = newObj)

//below is the second method to unfreeze jsUser

let newObj = {};   //making a new obj

for( var i in jsUser){
  newObj[i] = jsUser[i];              //we copied all elements of jsUser to newObj
}

jsUser = newObj;   //we assign newObj to jsUser
//console.log(Object.isFrozen(jsUser));   //op ----- false


jsUser.greeting = function () {
  console.log("hello "); 
  }
 //console.log(jsUser.greeting());    //hello  undefined
 //console.log(jsUser.greeting);   //[Function (anonymous)]
 //console.log(jsUser);
 /*{
  name: 'amrita',
  age: 18,
  location: 'jaipur',
  lastLoginDay: [ 'mon ', 'sat' ],
  email: '3',
  greeting: [Function (anonymous)]
} */

jsUser.greeting2 = function (){
 // console.log(`hello user ${jsUser.name}`);
 console.log(`hello user ${this.name}`);  // same as above code
} 
  
console.log(jsUser.greeting2());     //hello user amrita  undefined
