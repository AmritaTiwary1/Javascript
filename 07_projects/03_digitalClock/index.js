//document.getElementById('clock'); -->both 1,2 line are same
const clock= document.querySelector('#clock');


//let date = new Date();
//console.log(date.toLocaleTimeString());
//we want to update the date and want to show the updated time every second , thenwe use set interval
// setInterval(function(){
// }, 1000) //THIS IS THE SYNTAX OF SET INTERVAL

setInterval(function(){
    let date = new Date();
 clock.innerHTML=date.toLocaleTimeString();
},1000)