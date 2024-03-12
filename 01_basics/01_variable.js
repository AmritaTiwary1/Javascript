console.log("Amrita")
const accountId = "Amrita";  //it cant change later
let email = "amrita@gmail.com"  //if created again in block ,that will be treated as different variable
var accPswd = "1234"  //inside the block ,value can be change
/* var should not be used in most of the cases , use let
 */

accCity="delhi"  // this is global variable , acccesed by any where in the code
let accNo;  // this is undefined since it is not initialised

console.table([email,accCity,accPswd,accNo]);   // to print many things together in a table format
/* output _ 
┌─────────┬────────────────────┐
│ (index) │ Values             │
├─────────┼────────────────────┤
│ 0       │ 'amrita@gmail.com' │
│ 1       │ 'delhi'            │
│ 2       │ '1234'             │
│ 3       │ undefined          |  

*/
accPswd = "567";

console.log(email);
console.table([email,accCity,accPswd]); 
