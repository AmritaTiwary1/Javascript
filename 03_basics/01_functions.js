function SayMyName() {
console.log('D');
console.log("E");
console.log("v");
}

//SayMyName();   //calling function --DEV

function add(one , two ) {
   // console.log(one+two);
    return one+two;
}
//add(3,3);  //6

add(9,"k"); //9k due to console log
let ans = add(3,5);  
//console.log(ans);  //8

function loginUserMessage(userName) {
    if(userName==undefined){    //or if(!username){}
        console.log("please enter a username ");
        return;
    }
    return `${userName} just logged in`
}

let res = loginUserMessage("dev");
//console.log(res);   //dev just logged in

//console.log(loginUserMessage());  //undefined just logged in , when we dont pass any arguments , it givs undefined value

//After adding "if statement" in loginUserMessage function:
//console.log(loginUserMessage());    //please enter a username            undefined


//-----------------------------------------------------------------------------------


function calculateCartPrice1(num1) { 
   return num1;
}
//console.log(calculateCartPrice1(2));    //2
//console.log(calculateCartPrice1(200,300,400));   //200





//when we dont know how many argument will be passed in func bt want all of them  --- we use (...) is called  rest / spread operator

function calculateCartPrice2(...num1) {  //... is rest operator here not spread operator, it says takes all arguments in one nums , value inside the nums will be in array format
    return num1;
}
//console.log(calculateCartPrice2(2));    //2
//console.log(calculateCartPrice2(200,300,400));   //[ 200, 300, 400 ]




function calculateCartPrice3(firstVal , secondVal , ...num1) {  //... is rest operator here not spread operator, it says takes all arguments in one nums , value inside the nums will be in array format
    console.log("first Argument --",firstVal , ", Second Argument--",secondVal);
    return num1;
}
//calculateCartPrice3(2);    //first Argument -- 2 , Second Argument-- undefined

//console.log(calculateCartPrice3(2));    //{ first Argument --2 , Second Argument--undefined     [] }----this square bracket in output is num1

//console.log(calculateCartPrice3(200,300,400,700));  
/* OUTPUT : 
first Argument -- 200 , Second Argument-- 300
[ 400, 700 ]
*/


//PASSING OBJECT IN FUNC--------------------------------------------------------


const user = {
    username : "hitesh",
    price: 199
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is : ${anyObject.price}`);
}
//handleObject(user);   //username is hitesh and price is : 199

//handleObject({
//    username:"dev",
//    price:"priceless"
//})

//PASSING ARRAYS IN FUNCTION

const arr = [100,200,300,400];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(arr));  //200

console.log(returnSecondValue([900,500,400,500,300]));   //500
