const form = document.querySelector('form');
//we cant define height or weight here, bcoz it gives empty string , it can give error

form.addEventListener('submit', function(e){   //here , submit means calculate
     e.preventDefault(); //--> it will stop form from submitting to the server side bcoz right now, we dont hav any server
     
     const height = parseInt(document.querySelector('#height').value); //---> since , input take strings, so it is imp. to convert it to int
     const weight = parseInt(document.querySelector('#weight').value);
     const results = (document.querySelector('#results'));
     if(height==="" || height <0 || isNaN(height)){  //isNaN is function which check whether argument 
        results.innerHTML = `Please Give A Valid Height ${height}`;
     }
     else if(weight==="" || weight <0 || isNaN(weight)){  //isNaN is function which check whether argument 
        results.innerHTML = `Please Give A Valid weight ${weight}`;
     }
     else{
        const bmi= (weight /((height*height)/10000)).toFixed(2); //to fixed will print decimal value upto 2 place
        console.log(bmi);
      //show the result
      results.innerHTML = `<span>${bmi}</span>`
    }
    })