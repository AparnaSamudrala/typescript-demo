interface Product{
    productId: number;
    productName: string;
}

function getProductDetails(productobj: Product): string {
    
    return productobj.productName;
};

    
let productobj = {productId: 1001, productName: "mobile"}
console.log(getProductDetails(productobj));

getProductDetails(productobj);



