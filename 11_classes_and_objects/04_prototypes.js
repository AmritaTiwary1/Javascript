 let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);   // work is to make new proprty "trueLength"in a string, it means that when we write myName.length ,si it tells us the lemgth, i the same  way , truelength sud return real letter used in a string excluding spaces
// solution is at the end

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.amrita = function(){
    console.log(`AMRITA is present in all objects`);
}

Array.prototype.heyamrita = function(){
    console.log(`AMRITA says hello`);
}

//heroPower.amrita()   //AMRITA is present in all objects =====>    heroPower is object ,so it can access amrita function 
//myHeros.amrita()       // AMRITA is present in all objects   ====> myHeroed is array bt it can acccess object functions
 

//myHeros.heyamrita()  //AMRITA says hello
//heroPower.heyHitesh()   // TypeError: heroPower.heyHitesh is not a function , bcoz heroPower is object , it cant access the array functions/properties

// inheritance

//outdated syntax - 
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport  //it means that this class can access properties(variable/functions) ofTeachingSupport class
}

Teacher.__proto__ = User   //it means, teacher can access user object

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)  //it means teachingsupport can acccess teacher object

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength() 
/* ChaiAurCode     
True length is: 11
*/

 "dev".trueLength()
 /*
 dev
True length is: 3
 */
 "iceTea".trueLength()
 /*
 iceTea
True length is: 6

 */
