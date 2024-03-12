/*let score = "33"
 
console.log(typeof score)   //string

let valueInNumber = Number(score)
console.log(typeof valueInNumber);  //string

//If we want to convert number as well as alphabet to number data types

let a='34ab';
let conversion = Number(a);
console.log(typeof conversion)  //number
console.log(conversion)  //NaN

let isLoggedIn = 23
let con=Boolean(isLoggedIn)
console.log(typeof con);  //boolean 
console.log(con);  // true 

let no=44
let strCon = String(no)
console.log(typeof strCon);  //String
console.log(strCon);  //44  */

//when null is converted to number , then it give 0
//true , false are converted to 1,0 respectively

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
console.log(str3); 

console.log("1" + 2);   //12
console.log(1 + "2");   //12
console.log("1" + 2 + 2);  //122
console.log(1 + 2 + "2");  //32

console.log( (3 + 4) * 5 % 3);  //dont write confusing code

console.log(+true);  //1 : dont write confusing code
console.log(+"");  //0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2  //dont write confusing code

let gameCounter = 100
++gameCounter;
console.log(gameCounter); //101

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion