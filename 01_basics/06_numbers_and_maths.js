const score = 400
// console.log(score);

const balance = new Number(100) //a number is declared as object
// console.log(balance);   //op = [Number: 100] 

// console.log(balance.toString().length); //3
// console.log(balance.toFixed(1));  //op=100.0 :to fix the digits to be displayed afterdecimal point,it is used in ecommerce website smtimes, 

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));  //123.9 , will round off and give exactly same digits as passes in arguments
// console.log(otherNumber.toPrecision(2)); //1.2e+2 , bt when we have to do precision before digits , it gives this kind of output
const hundreds = 1000000
//console.log(hundreds.toLocaleString());   //1,000,000 : when no arguments passed , it will by default give international notation
// console.log(hundreds.toLocaleString('en-IN'));  //10,00,000  :when argument passed with countryunique name , it will give according to that

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);  //when run in terminal , give one word output , bt when run in browser, print all the maths function/property in js 
// console.log(Math.abs(-4));  //4 , give absolute value , means always positive value
// console.log(Math.round(4.6));  //do general rounding as done in maths
// console.log(Math.ceil(4.2));            //5 , give next highest value means , 4.1,4.2,4.9 --in any case give 5 as output
// console.log(Math.floor(4.9));           //4 , give lowest number , opposite of ceil func
// console.log(Math.min(4, 3, 6, 8));        //3 , return min value
// console.log(Math.max(4, 3, 6, 8));      //8 , max val.

console.log(Math.random());    //generate any num. btwn 0 and 1
//console.log((Math.random()*10) + 1);   // give number 1 to 10
//console.log(Math.floor(Math.random()*10) + 1);   //floor func. will dedut decimal part

const min = 10
const max = 20

//console.log(Math.floor(Math.random() * (max - min + 1)) + min)  //op -- 18 this time , can vary, will generate value btwn max and min
