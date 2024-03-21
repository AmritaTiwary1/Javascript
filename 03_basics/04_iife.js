function withoutIIfe() {
    console.log(`DB connected`);
}
//withoutIIfe();  //DB connected : here , we define function just before calling it.this is called immediately invoking function
//Why we use IIfe ?
//there are 2 main reason - 1. sometimes , global scope occur problem , so to prevent from global scope pollution ,we use iife 2. to immediately invoke function , and this syntax is shorter. 



(function IIfeUsed() {   //IIFE - immediately invoked function expression 
    console.log(`DB connected `);   
})();   //DB connected ----first write function then wrap it in () ie.(function...{log(connected)}) braces , then use parenthesis to call it , no need to write "IIfeUsed()""

//if we dont use ";" at the end of function calling , then it will give error [TypeError: (intermediate value)(...) is not a function]  if we directly write another iife function after that   

 
//iife and arrow function--
(()=>{
    console.log("iife");
})();  

//iife with arguments 
((name)=>{
    console.log(`${name} iife`);
})('amrita');  //amrita iife 

//NAMED IIFE -> the iife function which have name 
(function namedIIfe() {
    console.log("this is named iife bcoz this function have name - namedIIfe");
})(); //this is named iife bcoz this function have name - namedIIfe

//SIMPLE IIFE - HAVE NO NAME 
(()=>{
    console.log("no name , it is simple iife");
})();   //no name , it is simple iife

//Interview question - write 2 iife
//=> after writing first iife , there should be ";" , then start writing secong iife
 