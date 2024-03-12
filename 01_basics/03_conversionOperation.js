let score = "33"
 
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
console.log(strCon);  //44

//when null is converted to number , then it give 0
//true , false are converted to 1,0 respectively