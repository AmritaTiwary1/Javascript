//object can be of 2 ways : literal , constructor
//singleton
//INTERVIEW QUESTIONS : declare symbol outside and use it inside object

const sym1 = Symbol("keys1");
const sym2 = Symbol("keys2");


const jsUser = {//object literals
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
console.log(jsUser);   
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
console.log(jsUser);
/* 
{
  name: 'amrita',
  age: 18,
  location: 'jaipur',
  lastLoginDay: [ 'mon ', 'sat' ],
  email: '3',
  [Symbol(keys1)]: 'keys1'
} */