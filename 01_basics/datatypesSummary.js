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