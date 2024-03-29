// for of

// ["", "", ""]--arrays of string
// [{}, {}, {}] -- arrays of object , it is very common syntax in JS , specially in APIs

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
  //  console.log(num);   //  1  2  3  4  5
}

const greetings = "Hello world!"
for (const greet of greetings) {    // const greet means iterator from 1 to last elemnt
  //  console.log(`Each char is ${greet}`)
}
/*
        Each char is H
        Each char is e
        Each char is l
        Each char is l
        Each char is o
        Each char is  
        Each char is w
        Each char is o
        Each char is r
        Each char is l
        Each char is d
        Each char is !


*/

const greetings1 = "Hello world Dev!"
for (const i of greetings1) {      // instead of writing "i" , we can write anything eg. iterator , greet , index, a , b,c,d,e ......etc
    //console.log(`Each char is ${i}`)
}

// Maps

const map = new Map()      //map is a object which have many functions, it is quite similar to map in java ie,it also have keys and value 
// Map in javascript remembr order of insertion , keys are always unique ,if you insert same keys then it will overwrite old value of that keys , eg . below IN value was india bt whn i wanted to insert (In-Indian) , it overwrite old IN vALUE
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "Indian")

// console.log(map);  
 /*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/

//VALUES IN MAP CAN BE SAME-BUT NOT KEYS
let map2 = new Map();
map2.set('IN', "India")
map2.set('USA', "United States of America")
map2.set('Fr', "France")
map2.set('IND', "India")

 //console.log(map2);
/*
Map(4) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France',
  'IND' => 'India'
}
*/

for (const [key, value] of map) {
   //  console.log(key, ':-', value);
}
/*
IN :- Indian
USA :- United States of America
Fr :- France
*/

for (const [k, v] of map2) {     // k and v means keys and values , in map , the frst variable in for loop means "keys" and second variable means "values"
   // console.log(k, ':-', v);
}
/*
IN :- India
USA :- United States of America
Fr :- France
IND :- India
*/

for (const [FirstVariableIsKey] of map2) {     // FirstVariableIsKey means keys  , in map , the frst variable in for loop means "keys" and second variable means "values"
   // console.log(FirstVariableIsKey);
}
/*
IN
USA
Fr
IND
*/


for (const [,value] of map2) {     //  in map , the second variable in for loop means "value" and first varible is empty[ , value ]
   // console.log(value);
}
/*
India
United States of America
France
India
*/

const myObject = {
    game1: 'NFS',      //   'game1': 'NFS',  => game1 and 'game1' are same
    
    game2: 'Spiderman'    //'game2': 'Spiderman' =>  game2 and 'game2' are same
}


//OBJECTS ARE NOT ITERABLE
 for (const [key, value] of myObject) {
     console.log(key, ':-', value);        //TypeError: myObject is not iterable
    
 }