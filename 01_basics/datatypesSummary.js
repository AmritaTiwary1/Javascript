//primitive data types

//7 types : string , number , boolean , null , undefined , symbol(to make anything unique , later discussion), bigInt 
//js is dynamically types language , it means we dont need to describe datatypes of any variable eg:

const score = "hi" //we dont need to write datatype with it
console.log(typeof score);  //string :  js sense that it is string

let email; //by default it is undefined
console.log(typeof email);  //undefined

let emailId = undefined 
console.log(typeof emailId);  //undefined

const id = Symbol('123')
const anotherId = Symbol('123')
//symbol will create uniqueness among even with the same number

console.log(id==anotherId); //false

const BigNumber = 345435565366533323n
console.log(BigNumber);  //345435565366533323n
console.log(typeof BigNumber);  //bigint

//reference (non primitive)
//----> array , objects , functions
//arrays ----
const heroes = ["uma", "hari", "dev"]
console.log(heroes); // [ 'uma', 'hari', 'dev' ]

//objects ----
let obj1 = {
    name : "uma",
    age:22,
}
console.log(obj1);  //{ name: 'uma', age: 22 }

const myFunction = function(){
    console.log("hello world ");
}

//console.log(myFunction); //[Function: myFunction]
console.log(typeof myFunction); //function
console.log(myFunction()); // op---> "helloworld undefined"
myFunction()  //hello world 

//************************************************************************

// In memory , stack manage primitive and heap managed non primitive

let myName = "amrita";
let anotherName =myName;
console.log(anotherName); //amrita
anotherName = "bhagyaShree";
console.log(anotherName );  //bhagyaShree
console.log(myName); //amrita
//here , when anotherName take refernce from myName , and when we change the values inside anotherName, values didnt chnage in myName

let user = {
    email : "amritadev@gamil.com",
    upi : "dev@upiiii"
}
console.log(user);  //{ email: 'amritadev@gamil.com', upi: 'dev@upiiii' }

let userTwo = user;
userTwo.email = "devamrit@gmial.com"
console.log(userTwo);  //{ email: 'devamrit@gmial.com', upi: 'dev@upiiii' }

//here in object , values changes when we make changes in reference object bcoz object are non primitive data types which use heap that make changes in main object