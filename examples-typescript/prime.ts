// program to print prime numbers between the two numbers

function getPrimeNumbers(l: number,h: number){
     
     console.log(`The prime numbers between ${l} and ${h} are:`);

     // looping from lowerNumber to higherNumber
     for (let i = l; i <= h; i++) {
         let flag: number = 0;
     
         // looping through 2 to user input number
         for (let j = 2; j < i; j++) {
             if (i % j == 0) {
                 flag = 1;
                 break;
             }
         }
     
         // if number greater than 1 and not divisible by other numbers
         if (i > 1 && flag == 0) {
             console.log(i);
         }
     }
}

getPrimeNumbers(1,10);