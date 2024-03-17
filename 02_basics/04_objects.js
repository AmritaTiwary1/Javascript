// object singleton or constructor

//SINGLETON OBJECT :
const obj1 = new Object();  // another way to declare obj
//console.log(obj1);   //{}

//NON SINGLETON OBJECT :
const obj2= {};
//console.log(obj2);   //{}

//Adding keys to singleton obj - obj1
obj1.id="123asd";
obj1.name="dev";
obj1.isLoggedIn = false;

//console.log(obj1);   //{ id: '123asd', name: 'dev', isLoggedIn: false }

const regularUser = {
    email : "dev@gmail.com" ,
    name : "dev",
    fullName : {
        userFullName : {
        first : "shree",
        middle : "dev",
        last : "anand"
    }
}
}
//console.log(regularUser.fullName.userFullName);    //{ first: 'shree', middle: 'dev', last: 'anand' } , we can access nested object
obj1.newKey = regularUser;  //can add new obj as key 
//console.log(obj1);
/*
id: '123asd',
  name: 'dev',
  isLoggedIn: false,
  newKey: {
    email: 'dev@gmail.com',
    name: 'dev',
    fullName: { userFullName: [Object] }
  }
}*/

const objA = {1:"a" , 2:"b"}
const objB = {3:"c" , 4:"d"}

//MERGING MORE OBJECTS IN ANOTHER OBJECT --- 1> ASSIGN METHOD  2> SPREAD METHOD

//  --------------------------------    1>  ASSIGN       ------------------------------------------------------------

const mergedObj = {objA,objB};   //it will make two objects as key in mergedObj 
//console.log(mergedObj);  //{ objA: { '1': 'a', '2': 'b' }, objB: { '3': 'c', '4': 'd' } }

const objAssignInNewObj_1 = Object.assign( {}/*---(target)*/, objA, objB /*---(source)*/)  
//console.log(objAssignInNewObj_1);     //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//console.log(objA);      //{ '1': 'a', '2': 'b' }

const objAssignInNewObj = Object.assign(objA , objB);  //here , when objA is at first place , it becomes target so value of objA wil get chnage
//console.log(objAssignInNewObj);     //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//console.log(objA);    //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//console.log( objAssignInNewObj == objA);  //true : returned obj == target

//-----------------------------------      2> SPREAD  {Mostly Used Method Now-A-Days}  ------------------------------------------------------

const a = {1:"b",2:"c",3:"d"};
const b = {5:"e" , 6 : " f" , 7 :"g"};
const spreadtoMerge = {...a , ...b};   //{ '1': 'b', '2': 'c', '3': 'd', '5': 'e', '6': ' f', '7': 'g' }
//console.log(spreadtoMerge);

// when data comes from database ,it looks like ----(basic)

const users = [
    {
        id:1,
        name : "dev"
    },
    {
        id:2,
        name : "devi"
    }
];
//console.log(users[0].name); //dev : users[1] means acess the object which is at 0th idx in users arr , and in  users[1].name : users[1] is obj so to access key of obj we write : users[1].name
//console.log(users);   //[ { id: 1, name: 'dev' }, { id: 2, name: 'devi' } ]


//below code are very imp. for handling database
const allKeysOfObj1 = Object.keys(obj1);
//console.log(allKeysOfObj1);   //[ 'id', 'name', 'isLoggedIn', 'newKey' ] ,=it is array, can run loop easily , while handling database , we will use these keys of obj to run loop 
//console.log(Object.values(objA));   //[ 'a', 'b', 'c', 'd' ] , all the values of keys in array format

//console.log(Object.entries(objA));  //[ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ], [ '4', 'd' ] ] , all the individual keys,values become array and wrapped in arrray

//when we want to find value in obj bt it does not exist ----we do this

//console.log(obj1.hasOwnProperty('name'));  //true
//console.log(objA.hasOwnProperty('name'));  //false


/////////////////////--------////////////////////////------------//////////////////////////----------////////////////////////////------------------////////////////////////////////////-----

//OBJECT DE-STRUCTURE AND JSON API INTRO 


const course = {
    coursename : "jsInHindi",
    price:"999",
    courseInstructor : "hitesh"
}
// to access multiple times courseInstructor from course , we need to write course.courseInstrucctor

//ANOTHER BETTER AND WIDELY USED METHOD IS :

const {courseInstructor : sir} = course   //{courseInstructor : ci }means shortform of course instructor is ci from now , many times , when we need to access some keys from API , we would not change real api keys name , insted of that , make aliasName of it by using given syntax

console.log(sir);  //hitesh

