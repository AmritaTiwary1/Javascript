//array 

const myArr = [0,1,2,3,4,5,true,"amrita"];    //elements can be of different datatypes
console.log(myArr);    //[ 0, 1, 2, 3, 4, 5, true, 'amrita' ]
console.log(myArr[6]);   //true ,[6] it sud be a number

const arr = ["a" , "e" , "i"];  //strings can be in array

const arr2 = new Array(1,2,3,4);  //another way to declare array , unlike java we dont need to write [] after new Array....
console.log(arr2);      //[ 1, 2, 3, 4 ]

//Arrays method

arr2.push(6);  //to add new data to array
console.log(arr2);//[ 1, 2, 3, 4, 6 ]
arr2.push(5);
console.log(arr2);//[ 1, 2, 3, 4, 6 ,5]
arr2.pop();
console.log(arr2);   //[ 1, 2, 3, 4, 6 ]