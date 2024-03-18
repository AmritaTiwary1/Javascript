//NOTE : ----------- variable declares as let or const inside block is not accessed outside of block bt var is global , whether it is declared inside or outside of block , it can be access from anywhere

//---------------------------  VAR VARIABLE -------------------------------------------

var scope_var = "outside_var";
{
   // console.log(scope_var);   //outside_var
    var scope_var = "inside_var";  //inside_var
   // console.log(scope_var);
}
//console.log(scope_var);  //inside_var


//--------------------------------  LET VARIABle -----------------------------------------------

let checkScope = "outside_let";
{
    let checkScope = "inside_let";
   // console.log("INSIDE BLOCK : ",globalVar);   //INSIDE BLOCK :  inside_let
}
// console.log("OUTSIDE BLOCK : ",globalVar);    //OUTSIDE BLOCK :  outside_let


//------------------------------------CONST VARIABLE -----------------------------------------

const checkScopeOfConst = "outside_Const";
{
    const checkScopeOfConst = "inside_const";
   // console.log("INNER CONST : ", checkScopeOfConst);  //INNER CONST :  inside_const 
}
//console.log("OUTER CONST :", checkScopeOfConst);  //OUTER CONST : outside_Const

//  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

let a = 2;
const b=9;
var c= 8;
//console.log(a , b , c);   //2 9 8


if(true){
    let a=3;
    const b = 4;
    var c= 5;
   // console.log(a , b ,c);       //3 4 5 --- a , b are local variable , but 'c' is global instead of this that it is reDeclred inside block
}


{   // block 
 // console.log(a , b ,c);   // 2 9 5
}

//--------------------------------------------------------------------

if(true){
    let one = 34;
    const two = 3445;
    var three = 2345;   // or only three = 2345; same baat hai !
}
//console.log( one ); //ERROR : one is not defined
//console.log( two );   //ERROR : two is not dfined
//console.log( three );  //2345

//NOTE ^^^: ----------- variable declares as let or const inside block is not accessed outside of block bt var is global , whether it is declared inside or outside of block , it can be access from anywhere

function one(){
    const username = "dev"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);  //ERROR : ReferenceError: website is not defined

    two();
}
//one();    //------------------->>>> ERROR until we dont comment out console.log(website); , After commenting we get =========== dev

// NOTE : child function/block can access parents variable but parent variable cant access child function/ block variable 

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

if(true ){
    const username = "dev";
    if(username === "dev"){
        const website = "youtube"
        //console.log(username , website);   //dev youtube
    }
   // console.log(website);  //ReferenceError: website is not defined  -----> parent block cant access child's block variable
} 
//console.log(username);  //ReferenceError: username is not defined ----> outside the block , username cant accessed bcoz parent block cant access child block 

//++++++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++++++++++++

//1st syntax to write function

//console.log(addone(3));   //4 ----> no error , we can access function before declaring and initialising func
function addone(num) {
    return num+1;
}
addone(5);    

//2nd syntax -------

console.log(addTwo(7));    //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
    return num+2;
}
addTwo(8);   // no input :  but the main thing is that a variable has hold function  