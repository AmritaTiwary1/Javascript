const userObj = {
    username : "hitesh",
    price:999,
    welcomeMessage : function () {
       // console.log(`${username} welcome`); //ERROR--->ReferenceError: username is not defined

       console.log(`${this.username} welcome`);  //hitesh welcome
    
       console.log(this); 
      /* output of (this) ---in object or inside function of object , "this" means all the keys and value
      {
  username: 'hitesh',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
      */

      }
}
//userObj.welcomeMessage();   //hitesh welcome
userObj.username = "dev";
//userObj.welcomeMessage();   //dev welcome

//console.log(this);  //{} ----> in terminal , empty bracket bt in terminal ,WINDOWS's diff. properties will be shown 


function chai1() {
    let name ="chai" 
    console.log(this.name);   //undefined  ---> inside function , "this" keyword do not work
    console.log(this);  //combinations of objects appears in terminal 
}
//console.log("WHEN WE USE FIRST METHOD OF WRITING FUNCTION : ",chai1());  //output :combinations of objects appears in terminal and WHEN WE USE FIRST METHOD OF WRITING FUNCTION :  undefined



const chai2 = function(){
    let name = "dev";
    console.log(this.name);
    console.log(this);
}
//console.log("WHEN WE USE SECOND METHOD OF WRITING FUNCTION : " , chai2());  //output :combinations of objects appears in terminal and WHEN WE USE SECOND METHOD OF WRITING FUNCTION :  undefined

 const chai3 = ()=>{ 
     console.log(this); }
//console.log(chai3());      //-----{} ,empty barces , when function is declare using ARROW 


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  IMPLICIT RETURN   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//NORMAL FUNC ----------------------------------------------------------------------------------------------

const addTwo1 = (num1, num2)=>{
    return num1+num2;
}
//console.log(addTwo1(2,5));   //7


//implicit return func-------------------------------------------------------------------------------------

const addTwo2 = (num1 , num2) =>  num1 + num2;
//console.log(addTwo2(2,6));    //8


//Always use parenthesis when you return any object , or smthng else to avoid writing " return " keyword  (this kind of syntax is mostly used in reactJS)

const addTwo3 = (num1 , num2) =>  num1 + num2;
//console.log(addTwo3(5,8));   //13


const returnObj = () =>({ name : "dev" , friend:"hari"})  //parenthesis() is imp. otherwise , it will not work 
console.log(returnObj());        //{ name: 'dev', friend: 'hari' }
















