const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach((i) => {
    //  console.log(i);
})
/*
js
ruby
java
python
cpp
*/

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);  //undefined , bcoz in "values" , nothing is stored

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

myNums.filter((value) => {    // filter method also take callback functions and return values 
    //   console.log(value);     //1 2 3 4 5 6 7 8 9 10   : here, we dont return any value like value>6 or smthng else, not worthy way to use filter
})


const newNums = myNums.filter((num) => {   //since , filter return smthng , so it is important to store it in a variable , and that variable store arrray
    return num > 4  //here, we wrote "return" keyword bcoz we didnt used parenthesis , instead we used curly braces , which tells us about scope of that function
})
//console.log(newNums);  //[ 5, 6, 7, 8, 9, 10 ]

const arr = myNums.filter((val) => val < 5   //here , we dont use return keyword neither used curly braces
)
//console.log(arr);  //[ 1, 2, 3, 4 ]


const newNums1 = [];

myNums.forEach((num) => {
    if (num > 4) {
        newNums1.push(num)   //push means put new value on arrray ,btw , it is better to use filter in this case, as we are storing number in another array , and filter method by default retrun array of filtered elemnt
    }
    else {
        //newNums.pull()  //TypeError: newNums.pull is not a function , pull is not a proprty of array
    }
})

//console.log(newNums1);  //[ 5, 6, 7, 8, 9, 10 ]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

books.forEach((eachObj) => {
    if (eachObj.title.includes('Book S')) {
        // console.log(eachObj.title);    // Book Six       Book Seven
    }
})

let userBooks = books.filter((bk) => bk.genre === 'History') //here books whose genre is history are returned
//console.log(userBooks);
/*
[
{
  title: 'Book Three',
  genre: 'History',
  publish: 1999,
  edition: 2007
},
{
  title: 'Book Seven',
  genre: 'History',
  publish: 1986,
  edition: 1996
}
]
*/

userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);
/*
[
{
  title: 'Book Three',
  genre: 'History',
  publish: 1999,
  edition: 2007
}
]
*/

//WHY ERRORS IN FOLLOWING CODE ?? - DONT KNOW 
let newBooks = books.filter((obj) => {
    return obj.publish >= 2000 && obj.edition >= 2010
})
console.log(newBooks);
/*
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]
[
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
]
*/

 