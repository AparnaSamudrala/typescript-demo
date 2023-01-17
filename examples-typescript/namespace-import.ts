//to use the import file we need to use /// for specifying the reference path of the file name

/// <reference path="./namespace-demo.ts" />
 
import util = Utility.Payment;
 
let paymentAmount = util.CalculateAmount(1255, 6);
console.log(`Amount to be paid: ${paymentAmount}`);
let discount = Utility.MaxDiscountAllowed(6);
console.log(`Maximum discount allowed is: ${discount}`);

// once imported run both export file and import file together with below command
//tsc --outFile Final.js namespace-demo.ts namespace-import.ts
//output can be seen using node Final.js
