// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");   
// } else {
//     console.log("temperature is greater than 50");   //temperature is greater than 50
// }

// console.log("Execute");  //Execute

// if(2==="2"){
//     console.log("equal");
// }
// else{
//     console.log("=== means comparing value as well as data types of variable");
// }

// if(2=="2"){
//         console.log("== check value only not datatypes");  
//     }
//     else{
//         console.log("== means comparing value as well as data types of variable");
//     }   // op - == check value only not datatypes

 //output : === means comparing value as well as data types of variable
// <, >, <=, >=, ==, !=, ===, !==

//  const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);   // ERROR : power is defined inside if block with let keyword , so its scope is inside if block only  btt..... what if it start with var keywords
// const score = 200
// if (score > 100) {
//     var power = "fly"; //"var keyword should not be used before vsriable name , it create problm in big programs"
//     console.log(`User power: ${power}`);    //User power: fly
// }

// console.log(`User power: ${power}`);   //User power: fly 

// const balance = 1000

// if (balance > 500) console.log("test")  //when if statement have one stetement inside it , it can be wriiten in this way also

// if (balance > 500) console.log("test"),console.log("test2");   //when multiple statments are there , this is a way to write if statemnt

//the above line styel should not be used while writing code , curly braces are more used


// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}