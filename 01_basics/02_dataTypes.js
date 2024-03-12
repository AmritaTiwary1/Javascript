"use strict"; // treat all JS code as newer version

console.log("alert dont respond in nodeJS terminal but in browser")

// alert( 3+3 ) // will give error bcoz we are on nodeJS not in browser

//datatypes --
let name = "dev"  //string
let age = 0  // int
let isTrue = true  //boolean
let state; // undefined
let time = null  //null
//symbol ==.unique

console.table([typeof name  ,typeof age,typeof isTrue,typeof state , typeof time]);
/* output --
│ (index) │ Values      │
├─────────┼─────────────┤
│ 0       │ 'string'    │
│ 1       │ 'number'    │
│ 2       │ 'boolean'   │
│ 3       │ 'undefined' │
│ 4       │ 'object'    │
*/


