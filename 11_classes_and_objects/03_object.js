function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2   // function can also access these properties .power

//console.log(multipleBy5(5));  //25
//console.log(multipleBy5.power);    //2
//console.log(multipleBy5.prototype);   //{}

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){   //inside prototype of creatuser , incremet will be a function name
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25) //chai object can access printMe function bcoz printMe and increment are in prototype of createuser, it mean all the objects that will be made from "createUser" can access it
const tea = createUser("tea", 250)

//chai.printMe();        //price is 25
//chai.increment();  //it will increment this.score( chai's own score value)
//chai.printMe();     //price is 26

//tea.printMe();   //TypeError: Cannot read properties of undefined (reading 'printMe')  BECAUSE WE HAVE NOT USED NEW KEYWORD




/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/