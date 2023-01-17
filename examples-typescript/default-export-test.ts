//ProductData(can be any valid name) is the one with export default class with noclassname in the export file
import ProductData, {Utility} from './default-export';
const product = new ProductData();
const details = product.getProductDetails(1001);
console.log(details);
const util = new Utility();
const price = util.CalculateAmount(1300, 4);
console.log(`The price is ${price}`);

// execute commands
//tsc default-export.ts default-export-test.ts
// node default-export-test.js