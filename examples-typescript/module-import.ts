import { Utility as mainUtility, Category, productName, MaxDiscountAllowed } from "./module-demo";
const util = new mainUtility();
const price = util.CalculateAmount(1350, 4);
 
const discount = MaxDiscountAllowed(2);
console.log(`Maximum discount allowed is: ${discount}`);
 
console.log(`Amount to be paid: ${price}`);
console.log(`ProductName is: ${productName}`);

// after importing pls run the below commands
//command1
//tsc module-demo.ts module-import.ts
//command2
 //node module-import.js

/*  o/p:
Maximum discount allowed is: 10
Amount to be paid: 5400
ProductName is: Mobile */