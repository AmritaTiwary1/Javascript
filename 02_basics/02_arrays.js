const arr1 = [" a "," b ", "c"];
const arr2 = [ "d "," e "," f "];

arr1.push(arr2);
//console.log(arr1);    //[" a "," b ", "c", [ 'd ', ' e ', ' f ' ]]

//console.log(arr1[3][1]);  //e
arr1.pop()   //it will pop last pushed elements 
//console.log(arr1);   //[ ' a ', ' b ', 'c' ]

arr1.concat(arr2);  //NO CHANGE
//console.log(arr1);   //[ ' a ', ' b ', 'c' ]

//Different method to join two array ------------------ [ concat , spread Operator]

const concatArr = arr1.concat(arr2);
//console.log(concatArr);  //[ ' a ', ' b ', 'c','d ', ' e ', ' f ' ]

//widely used method is spread , bcoz it can join more than two arrays at the same time

const spreadArr = [...arr1 , ...arr2 ]
//console.log(spreadArr);  //[ ' a ', ' b ', 'c','d ', ' e ', ' f ' ]

const other = ["zero" , "infinite"];
const whole = [...arr1 , ...arr2 , ...other];
//console.log(whole);  //[' a ', ' b ', 'c','d ', ' e ', ' f ' , 'zero' , 'infinite']

//When there are multiple array within an array , to make it one ----we use flat() function , it also take arg uments for depth
const anotherArr = [1,2,3,[4,5,6],7,[4,5]];
const OnlySingleArr = anotherArr.flat();
//console.log(OnlySingleArr);   //[  1, 2, 3, 4, 5, 6, 7, 4, 5 ]

const infiniteDepthArr = anotherArr.flat(Infinity);
//console.log(infiniteDepthArr);   //[  1, 2, 3, 4, 5, 6, 7, 4, 5 ]

//to check whether a data is array or not :If we take some big data from google,etc : this func helps us
const name = "dev";
console.log(Array.isArray(name));  //false
const makeArr = Array.from(name);
console.log(makeArr);     //[ 'd', 'e', 'v' ] 

let unique = { name : " dev ",  friend : " Ram "};  //interesting
console.log(Array.from(unique));  //[] , it gives empty array , bcoz it is confused that should whether to make array from keys or from values

let one = 100;
let two = 200;
let three =300;
let newArrFromIndividualNumbers = Array.of(one,two,three);
console.log(newArrFromIndividualNumbers);  //[ 100, 200, 300 ]





   
  

