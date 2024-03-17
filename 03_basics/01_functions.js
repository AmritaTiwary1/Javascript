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
console.log(loginUserMessage());    //please enter a username            undefined
