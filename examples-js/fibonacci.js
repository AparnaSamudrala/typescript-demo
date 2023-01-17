function recur(num)  
{  
// when num is equal to 1, it returns 0 and 1  
if (num == 1)  
{  
return [0, 1];  
}  
else  
{  
// it continuously calls the recur function till n-1  
total = recur (num - 1);  
  
total.push( total[ total.length - 1] + total[ total.length - 2]);  
return total;  
}  
  
}  
//first 12 fibonacci numbers using Recursion.  
console.log("Fibonacci Series first 12 in JavaScript: " + recur( 12 ) + "<br>");  