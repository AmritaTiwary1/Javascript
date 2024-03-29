// Q1. Can we change the value of pi or any other original property of object  =>  writable: false/
//Q.2 Is it possible that some keys of objects dont show/print in loop
//Object.getOwnPropertyDescriptor( argument ) is a function which out new object giving the info about arguments passed in this function

//Q1. Can we change the value of pi or any other original property of object  =>  writable: false/
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")  

//console.log(descripter);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

// console.log(Math.PI);  //3.141592653589793

Math.PI = 5
//console.log(Math.PI);   //3.141592653589793

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

//console.log(Object.getOwnPropertyDescriptor(chai, "name"));  // here ,the object sud be 1st parameter and the key whose value we want should be our 2nd parameter
/*  output : ---
{
  value: 'ginger chai',
  writable: true,    // here , this is writable bt math pi value was not true
  enumerable: true,
  configurable: true
}
*/

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: true,
})

//console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*
{ output --
  value: 'ginger chai',
  writable: false,
  enumerable: true,
  configurable: true
}
*/

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
       //console.log(`${key} : ${value}`);
    }
}
/*
name : ginger chai
price : 250
isAvailable : true
*/   



//Q.2 Is it possible that some keys of objects dont show/print in loop
const a={
    name :"dev",
    soul :"ram",
    age:23
}

//console.log( Object.getOwnPropertyDescriptor(a,"name")) ; //{ value: 'dev', writable: true, enumerable: true, configurable: true }

Object.defineProperty(a,"name",{
     enumerable :false
})
// for( let [key,value] of a){  //TypeError: a is not iterable
//     console.log(key,value);
// }


for (let [key, value] of Object.entries(a)) {
   console.log(`${key} : ${value}`);
    }
/*   here , name is not in the loop 
soul : ram
age : 23
*/    
