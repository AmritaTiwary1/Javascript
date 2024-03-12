//Normal operator
console.log(2>=2);  //true

//opertor with string , number , null , etc
console.log("2">1 ); //true
console.log("1">7 ); //false
console.log(null >0 ); //false
console.log(null >=0);  //true  //null converts to number bcoz of ">" sign and become 0 when converted to number
console.log(null==0)  //false  // bt when we use equal operator , null is not converted to number

console.log("*************************");
//we sud avoid this kind of code
console.log(undefined ==0 );  //false
console.log(undefined >0);  //false
console.log(undefined <0);  //false
console.log(+undefined)  //NaN

