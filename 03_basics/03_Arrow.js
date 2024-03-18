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

console.log(this);  //{} ----> in terminal , empty bracket bt in terminal ,WINDOWS's diff. properties will be shown 


function chai() {
    let name ="chai" 
    console.log(this.chai);   //undefined
    //console.log(this);  //many features , properties of a function will be output
}

console.log(chai());
const func = ()=>{
    console.log(this);
}
//console.log(func());   