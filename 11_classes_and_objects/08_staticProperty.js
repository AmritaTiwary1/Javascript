// with static ---
class User1 {
    constructor(username){
        this.username = username
    }
logMe(){
        console.log(`Username: ${this.username}`);
    }
   static createId(){  
        return `123`
    }
}

const instanceOfUser = new User1("amrita");   //here , instanceOfUser cant access createId
//instanceOfUser.logMe();       // ---> Username: amrita
//console.log(instanceOfUser.createId());    // TypeError: instanceOfUser.createId is not a function 

class extendedClass extends User1{
    constructor(username,email){
        super(username);
        this.email = email;
        console.log(`your name is ${this.username}`);
    }
   print(){
        console.log("just a print statement");
    }
}

const newClass = new extendedClass("dev","devansh@example.com");   //your name is dev
newClass.logMe();       //Username: dev      
newClass.print();       //just a print statement
//console.log(newClass.createId());        //TypeError: newClass.createId is not a function


// without static ---
// class User {
//     constructor(username){
//         this.username = username
//     }
// logMe(){
//         console.log(`Username: ${this.username}`);
//     }
//    createId(){  
//         return `123`
//     }
// }

// const dev = new User("dev")
//  console.log(dev.createId())  // 123

// class Teacher extends User {
//     constructor(username, email){
//         super(username)
//         this.email = email
//     }
// }

// const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.createId()); //123

