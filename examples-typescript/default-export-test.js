"use strict";
exports.__esModule = true;
//ProductData(can be any valid name) is the one with export default class with noclassname in the export file
var default_export_1 = require("./default-export");
var product = new default_export_1.A();
var details = product.getProductDetails(1001);
console.log(details);
var util = new default_export_1.Utility();
var price = util.CalculateAmount(1300, 4);
console.log("The price is ".concat(price));
// execute commands
//tsc default-export.ts default-export-test.ts
// node default-export-test.js
