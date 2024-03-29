//FOR IN LOOP ON OBJECT   --possible
//FOR IN LOOP ON ARRAY   -possible
//FOR IN LOOP ON MAP    - not possible

//FOR LOOP ON OBJECT
const myObj = {
    js:"javascript",
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myObj) {
    //console.log(key);
 }
 /*
js
cpp
rb
swift

 */

for (const key in myObj) {
        const element = myObj[key];    // myObj[key] = value of that key
       // console.log(`key : ${key}         value : ${myObj[key]}`);
     }

/*
key : js         value : javascript
key : cpp         value : c++
key : rb         value : ruby
key : swift         value : swift by apple
*/

//FOR IN LOOP ON ARRAY 
const arr=[11,22,33,44,55]
for (const key in arr) {
  // console.log(key);      // 0  1  2  3  4
}

for (const key in arr) {
   // console.log(arr[key]);  //11 22 33 44 55
 }

//FOR LOOP ON MAP  --no output
const map1 = new Map();
map1.set("Dev","100%");
map1.set("Devi","100%");
map1.set("amrita","0%");
map1.set("hariPriya","100%");

for (const key in map1) {
    console.log(key);   //no output
   console.log(`key :${key}     value :${map1[key]}`); //no output
    
}
