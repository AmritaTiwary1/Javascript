/*after writing promise, .then executes when promise get resolve and .catch executes when reject fn calls
 .then function will receive arguments that are being passed to resolve( arguments )
.catch  will receive arguments that are being passed to reject( arguments )
chaining --  .then after .then will receive returned value of above.then function 
=>  .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);   here username is just a variable name which accept the return value of previous .then fnction => user.username

using async without try catch also give correct output in but this is not the right method bcoz may be while fetching the data, some error occur , so we need to be ready yo handle error situations, Async do not handle error, so we need to write try and catch
    */



/*const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");   //output: Async task is compelete , but not - promise consumed , bcoz we dont call resolve() and function inside (.then) executes only when promise resolve 
})


const promiseOne2 = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async2 task is compelete'); 
        resolve(); 
    }, 1000)
})

promiseOne2.then(function(){
    console.log("Promise2 consumed");    //op : Async2 task is compelete & Promise2 consumed : bcoz resolve keyword is there

})*/




/*new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2"); // when we comment out resolve() ,in output -only  Async task 2 will be printed 
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved"); // Async task 2  &   Async 2 resolved
    
})*/


/*const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){  //what is user here ? =>user takes the value of parameters inside the resolve(parameters)
    console.log(user);   //{ username: 'Chai', email: 'chai@example.com' }
})*/


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) { //since error is true, !error = false
            resolve({username: "hitesh", password: "123"})            //else statement will be executed
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

//after writing promise, .then executes when promise get resolve and .catch executes when reject fn calls

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){   //error here is just a variable name which accept the parameters passed inside reject(parameter)
    console.log(error);   //ERROR: Something went wrong
}).finally(() => console.log("The promise is either resolved or rejected"))  */                  //The promise is either resolved or rejected
/*  
output :
ERROR: Something went wrong
The promise is either resolved or rejected



/*const promiseFour2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) { //since error is false, !error = true
            resolve({username: "hitesh", password: "123"})            //if statement will be executed
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})


 promiseFour2
 .then((user) => {                            // here, user is just a variable name which accept the parameters passed inside resolve(parameter)
    console.log(user);
    return user.username
}).then((username) => {                       // here username is just a variable name which accept the return value of previous .then fnction
    console.log(username);
}).catch(function(error){                     //error here is just a variable name which accept the parameters passed inside reject(parameter)
    console.log(error);                     //ERROR: Something went wrong
}).finally(() => console.log("The promise is either resolved or rejected"))   // .finally will executes in both situation , resolve or reject              
*/


/*
OUTPUT :
{ username: 'hitesh', password: '123' }
hitesh
The promise is either resolved or rejected
*/

// async - try and catch 
/*const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
}); 

async function consumePromiseFive(){    //we have to call this function latter
    try {                         //------> try handle resolve() case
        const response = await promiseFive     //response is variable which store value that are passed within resolve()
        console.log(response);
    } catch (error) {
        console.log(error); 
    }
}
consumePromiseFive()  //=====>   //ERROR: JS went wrong
*/


// this also give correct  output in following code - but this is not the right method bcoz may be while fetching the data, some error occur , so we need to be ready yo handle error situations, Async do not handle error, so we need to write try and catch
/*async function getAllUsers(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
}
getAllUsers()   //=================== array of objects

*/


/*async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()  //=== array of objects
*/

//fetch and .then , .catch
/*fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))     // it directly give output without calling any functions =output : data inside objects
*/

 //promise.all
// yes this is also available, kuch reading aap b kro.