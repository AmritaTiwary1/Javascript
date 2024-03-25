//reduce -- it takes call back function like forEach,map , filter
// reduce take two arguments accumulator and currentvalue{currentvalue is current index value}
//reduce is used in ecommerce website when you want to add total amount of add to cart items, SEE LAST SECTION OF THIS CODE , THERE WE FIND TOTAL PAYPRICE FOR ITEMS IN ADD TO CART 

  //REDUCE() DEMO
const arr = [1,2,3,4];

const initialvalue = 0;
const sumWithInitial = arr.reduce(             //REDUCE() DEMO
 (accumulator,currentValue )=> accumulator + currentValue ,initialvalue
    );

/*here , accumulator first takes the value of initialvalue i.e=0 this time , 
and when inside function , this accumulator + currentValue takes place , it will store in accumulator ,
reduce operations works on whole array  , dry run whole array below 
 1 step: accumulator = initialvalue = 0
           currentValue = 1 //in arr =[1,2,3,4] , first index value is 1 
           accumulator + currentvalue = 1
           => accumulator = 1
2 step : accumulator = accumulatorLastUpdatedValue = 1
           currentValue = 2 //in arr =[1,2,3,4] 
           accumulator + currentvalue = 3
           => accumulator = 3
3 step : accumulator = accumulatorLastUpdatedValue = 3
           currentValue = 3 //in arr =[1,2,3,4]
           accumulator + currentvalue =  6
           => accumulator = 6
4 step : accumulator = accumulatorLastUpdatedValue = 6
           currentValue = 4 //in arr =[1,2,3,4]  
           accumulator + currentvalue = 10
           => accumulator = 10

//work of initialValue is just to give initial value to accumulator
*/



const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
   // console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval                      // --- after running for every index , it will return 
}, 0)    // ---- here 0 is the initialValue of accumulator

//console.log(myTotal);  

/*  output -- 
acc: 0 and currval: 1
acc: 1 and currval: 2
acc: 3 and currval: 3
6 : since in above code of reduce demo , we have understood that when index value is 3, it gives 6 as result
*/

//reduce with arrow function
const myTotal1 = myNums.reduce( (acc, curr) => acc+curr, 3) 

//console.log(myTotal1);   // 9

//reduce is used in ecommerce website when you want to add total amount of add to cart items 
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);  //22996