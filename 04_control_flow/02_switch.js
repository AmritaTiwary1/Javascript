// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// 



const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
     
    case "april":
        console.log("april");
 

    default:
        console.log("default case match");
        break;
}//march   april   default case match



//break keyword is important after every case , otherwise without checking next condition , it will run the statemnt inside it
// default statmnt will also run if break sttemnt will miss from last case