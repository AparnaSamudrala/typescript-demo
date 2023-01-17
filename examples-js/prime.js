// program to print prime numbers between the two numbers

function getPrimeList(l,h){
     l = parseInt(l);
     h = parseInt(h);
     console.log(`The prime numbers between ${l} and ${h} are:`);

     // looping from lowerNumber to higherNumber
     for (let i = l; i <= h; i++) {
         let flag = 0;
     
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

getPrimeList(1,10);