//dates ,time are used in ecommerce website for offer page,order placed info , 
//to make games--quizes[in how many minutes,we answer the quiz answer], to find for how many hours a customer booked a hotel , means its checkInTime - checkOutTimes

let myDate = new Date()
//console.log(myDate);   //2024-03-14T19:08:07.826Z

//to look it good, convert it in differnt way

//console.log(myDate.toString());  //Thu Mar 14 2024 19:10:37 GMT+0000 (Coordinated Universal Time)
//console.log(myDate.toLocaleString());   //3/14/2024, 7:14:36 PM

//console.log(myDate.toDateString());  //Thu Mar 14 2024
//console.log(myDate.toLocaleDateString());  //3/14/2024  , when said .todate or .to localdatestring , it simply print date only , not time

//console.log(myDate.toISOString());   //2024-03-14T19:13:17.065Z
//console.log(myDate.toJSON());        //2024-03-14T19:13:52.705Z

//console.log(typeof myDate );  //object , since we had declared it as a object i.e----let myDate = new Date() , date is predefined object in js

let myCreatedDate = new Date(2024 , 0 , 22);    //here,0 is date , in js-- months starts with 0 but year,months are not
//console.log(myCreatedDate.toDateString());   //Mon Jan 22 2024 , it prints the exact date of the value passed in argument
let myCreatedDate1 = new Date(2024 , 0,22,3,4);   // 4th , 5th aguments are hour, min 
//console.log(myCreatedDate1.toLocaleString());  //1/22/2024, 3:04:00 AM

let myCreatedDate2 = new Date("01-14-2023")  //the way we write in argument , output will also be in that way
//console.log(myCreatedDate2.toLocaleString());    //1/14/2023, 12:00:00 AM

let myCreatedDate3 = Date.now();
//console.log(myCreatedDate3);      //1710445095155

