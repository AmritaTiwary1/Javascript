const buttons= document.querySelectorAll('.button');
const body = document.querySelector('body');


buttons.forEach(function(button){
    button.addEventListener('click' , function(e){  //
          //console.log(e);  //--->PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …} & many property
         // console.log(e.target);  //---> <span class="button" id="white"></span> when we click any colour box , it shows that span
         console.log(e.target.id);  //.._blue , when we click on blue box, it shows this
         let key = e.target.id;
         switch (key) {
            case 'grey':
                body.style.backgroundColor = key;  //or , body.style.backgroundColor = e.target.id;  or, body.style.backgroundColor = 'grey';
               
            break;
          case 'blue':
            body.style.backgroundColor = key;
                break; 
           case 'yellow':
            body.style.backgroundColor = key; 
                break;
          case 'white':
            body.style.backgroundColor = key;   
                break; 
        case 'purple':
              body.style.backgroundColor = key;   
             break;          
            default:
                body.style.backgroundColor ='white';
                break;
         }
        })
})