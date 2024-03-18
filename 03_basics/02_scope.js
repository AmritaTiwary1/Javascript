//NOTE : ----------- variable declares as let or const inside block is not accessed outside of block bt var is global , whether it is declared inside or outside of block , it can be access from anywhere

//---------------------------  VAR VARIABLE -------------------------------------------

var scope_var = "outside_var";
{
    console.log(scope_var);   //outside_var
    var scope_var = "inside_var";  //inside_var
    console.log(scope_var);
}
console.log(scope_var);  //inside_var


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
console.log( three );  //2345

//NOTE : ----------- variable declares as let or const inside block is not accessed outside of block bt var is global , whether it is declared inside or outside of block , it can be access from anywhere

