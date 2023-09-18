

let myArray = [42,3,4,52,5];
let numeroAlto=0;
for(let i =0; i<myArray.length;i++){
    
    if (myArray[i] > numeroAlto) {
        numeroAlto = myArray[i];
      }
    
}



console.log(myArray); 
console.log(numeroAlto); 

