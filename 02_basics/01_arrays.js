//array 

const myArr = [0,1,2,3,4,5,true,"amrita"];    //elements can be of different datatypes
//console.log(myArr);    //[ 0, 1, 2, 3, 4, 5, true, 'amrita' ]
//console.log(myArr[6]);   //true ,[6] it sud be a number

const arr = ["a" , "e" , "i"];  //strings can be in array

const arr2 = new Array(1,2,3,4);  //another way to declare array , unlike java we dont need to write [] after new Array....
//console.log(arr2);      //[ 1, 2, 3, 4 ]

//Arrays method

arr2.push(6);  //to add new data to array
//console.log(arr2);//[ 1, 2, 3, 4, 6 ]
arr2.push(5);
//console.log(arr2);//[ 1, 2, 3, 4, 6 ,5]
arr2.pop();
//console.log(arr2);   //[ 1, 2, 3, 4, 6 ]
arr2.shift();  //it remove first element and shift all elements to the left
//console.log(arr2);    //[ 2, 3, 4, 6 ]
arr2.unshift(9);  //this method shift all the element right and add 9 to the first
//console.log(arr2);  //[ 9,2, 3, 4, 6 ]

//some methods which ask question  --------------

// console.log(arr2.includes(3));   //true
// console.log(arr2.indexOf(3));   //2
// console.log(arr2.indexOf(1));  //-1 , return -1 when index does not exist

const newArr = arr2.join();   //it convert array to string
// console.log(typeof newArr);    //string
// console.log(arr2);    //[ 9, 2, 3, 4, 6 ]
// console.log(newArr);    //9,2,3,4,6

//slice ---- [print some part of array, last argument-1 will be printed ] 
// splice ----[till last argument printed and it will remove that part of arr fom real array]

//console.log("A" , arr2);   //A [ 9, 2, 3, 4, 6 ]
const myNewArr = arr2.slice(1,3);
//console.log(myNewArr);    //[ 2, 3 ]
//console.log("B ",arr2);   //B  [ 2, 3 ]
const mySplicedArr = arr2.splice(1,3);  //it will take 1,2,3rd  index and will remove this indexed value from the real array(arr2)
//console.log(mySplicedArr);   //[ 2, 3, 4 ]
//console.log("C ",arr2);   //C  [ 9, 6 ]





