/*
IN FOREACH LOOP ------
 1.  function is important , inside func , we write what we want to do ,whether to print,add,or....etc
 2. this is call back function , in this function , no name is there , and "i" means value at every index
 3. function can be written as arrow function
 4. we can define function above , and can pass it in forEach 
 5. In ForEach Loop of array , first parameter is always value , second id index and third argument is full array
*/





const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(    //function is important , inside func , we write what we want to do ,whether to print,add,or....etc
  function (i){    //this is call back function , in this function , no name is there , and "i" means value at every index
//   console.log(i);
  }
)
/*
js
ruby
java
python
cpp
*/


coding.forEach( function (val){
 //  console.log(val);
} )
/*
/*
js
ruby
java
python
cpp
*/


coding.forEach( (item) => {    //function can be written as arrow function
  //  console.log(item);
} )
/*
js
ruby
java
python
cpp
*/

function printMe(item){
    //console.log(item);
}
coding.forEach(printMe)   // we can define function above , and can pass it in forEach 


coding.forEach( (item, index, arr)=> {   //In ForEach Loop of array , first parameter is always value , second id index and third argument is full array
 //   console.log(item, index, arr);
} )
/*
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

*/


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {    // for all object , item is used.
    
  // console.log(item.languageName);   // item.languageName means inside every object , print languageName key's  value
} )
/*
javascript
java
python
*/