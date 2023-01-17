function getProductDetails(productobj) {
    return productobj.productName;
}
;
var productobj = { productId: 1001, productName: "mobile" };
console.log(getProductDetails(productobj));
getProductDetails(productobj);
