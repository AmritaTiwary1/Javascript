/*
falsy value :  they consider as false in if else statemnt
false , 0 , -0 , BigInt 0n , "", null , undefind , NaN

truthy value : they consider as true in if else statemnt

"0" , 'false' , " " , [] , function(){} , true , any number posituve , negative except 0 , [] , "0" , 

//here , "0", "false" are truthy value because they are string and the string here is not empty

//HOW TO CHECK LENGTH OF ARRAY AND OBJECT -

// const arr=[];
// if(arr.length==0){
//     console.log("empty");   //empty
// }

// const obj={};
// if(obj.length==0){   //wrong way to check length of obj  
//     console.log("empty");  // no output in terminal
// }

// const obj={};
// if(Object.keys(obj).length==0){   //
//     console.log("empty object");  //empty object
// }


const userEmail = "h@hitesh.ai";
 const userEmail1 = "";
 const userEmail2 = [];

 */


// if(userEmail){     // here , we just assume that whatever is the userEmail , if it not empty , then run the statemnt 
//  console.log("Got user email ");
// }
// else{
//     console.log("dont have user email");
// }  //Got user email 


// const userEmail1 = "";
// if(userEmail1){     // here , we just assume that whatever is the userEmail , if it empty , then run the else statemnt 
//     console.log("Got user email ");
//    }
//    else{
//        console.log("dont have user email");
//    }  //dont have user email



// const userEmail2 = [];
// if(userEmail2){     // here , we just assume that whatever is the userEmail , if it empty , then run the else statemnt 
//     console.log("Got user email ");
//    }
//    else{
//        console.log("dont have user email");
//    }  //Got user email 


//  NULLISH COALESCING OPERATOR ( ?? ) : NULL UNDEFINED

// let val1;
// val1 = 5 ?? 10  //this syntax means assign the non-zero value to variable , in this case, 5 and 10 both are positive so first num. will be assign 
// console.log(val1);  //5


// let val2;
// val2 = null ?? 10  //this syntax means assign the non-zero value to variable , in this case, null is equivalent to zero value and 10 is positive so 10 will be assign 
// console.log(val2);   //10


// let val3;
// val3 = undefined ?? 19  //this syntax means assign the non-zero value to variable , in this case, undefined is equivalent to zero value and 19 is positive so 19 will be assign 
// console.log(val3);    //19


// let val4;
// val4 = undefined ?? 12 ?? 4 //this syntax means assign the non-zero value to variable , in this case, undefined is equivalent to zero value and 12 is the first positive so 12 will be assign 
// console.log(val4);    //12

//TERNERY OPERATOR -

//condition ? true :false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");  //more than 80
