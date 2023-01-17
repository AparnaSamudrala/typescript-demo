// Run this ts file using the command > tsc --target ES5 class-accessors.ts 
//else it throws error: Accessors are only available when targeting ECMAScript 5 and higher.

//Creating accessors in a class

//Accessing accessors

let passcode = "secret passcode";
 
class Product {
private _productName: string;
 
get productName(): string {
return this._productName;
}
 
set productName(newName: string) {
if (passcode && passcode == "secret passcode") {
this._productName= newName;
}
else {
console.log("Error: Unauthorized update of employee!");
}
}
}
let product:Product = new Product();
product.productName = "Fridge";
if (product.productName) {
console.log(product.productName);
}
 
 
