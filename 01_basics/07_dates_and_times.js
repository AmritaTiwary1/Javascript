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

let totMiliSecTillNow = Date.now();
//console.log(totlMiliSecTillNow);      //1710445095155 ,it changes every second(milisecond) it is total milisecond from 1970 to till date

//console.log(myCreatedDate2.getTime()); //1673654400000 , it changes every milisecond, it gives the total milisecond between current time and myCreatedDate2

//console.log(myCreatedDate2.getTime())/3600000;   //464904 , total hours from 1970....
//console.log(Date.now()/1000);  //1710493344.413(changes with time) , date.now() give total milisecond till now when we divide it by 1000 , it gives total second till now . since 1 secind = 1000 milisecond

let newDate = new Date();
//console.log(newDate);       //2024-03-15T14:39:40.593Z
//console.log(newDate.getMonth()+1);       //3
//console.log(newDate.getDay());     //5

//console.log(`Today date is : ${newDate.getDate()} and months is : ${newDate.getMonth()}`);  //Today date is : 15 and months is : 2

//different features provide by date.tolacaleString() function
console.log(newDate.toLocaleString('default',{     //in second argument, it is object where we can define how to print our output , means eg:weekday :"long :means day name should be long , Monday not mon"
      weekday : "long" 
}));   //Friday


//Extra Things Done By me :to calculate hours of a quiz 

let StartTime = new Date(2024,2,15 ,3,5);
//console.log(StartTime.toLocaleString());  //3/15/2024, 3:05:00 AM
let StartTimeInMiliSec = StartTime.getTime(); 
//console.log(StartTimeInMiliSec);    //1710471900000
let StartTimetothour = Math.floor(StartTimeInMiliSec/3600000);  
//console.log(StartTimetothour);   //475131  

let EndTime = new Date(2024,2,15,15,5);
//console.log(EndTime.toLocaleString());     //3/15/2024, 3:05:00 PM
let EndTimeInMiliSec = EndTime.getTime();
//console.log(EndTimeInMiliSec);     //1710515100000
let EndTimeTothour = Math.floor(EndTimeInMiliSec/3600000);
//console.log(EndTimeTothour);     //475143

let diff = EndTimeTothour - StartTimetothour ;
//console.log(diff);  //12   ---- total differene between start time and end time

//how to find total hours taken by user till current time from given time
let currDiff = Math.floor(Date.now()/3600000) - StartTimetothour ;
//console.log(currDiff);  //7 







