;
var mobileList = [{ pId: 432, productName: "Samsung Galaxy Note 7", productPrice: 699, productAvailable: true
    },
    { pId: 231, productName: "Samsung Galaxy S6 Edge", productPrice: 650, productAvailable: true
    },
    { pId: 875, productName: "Nokia Lumia 640XL", productPrice: 224, productAvailable: false
    }];
function getMobileDetails(manufacturer) {
    if (manufacturer === 'samsung') {
        document.querySelector("#pPrice0").innerHTML = mobileList[0].productPrice + "";
        document.querySelector("#pName0").innerHTML = mobileList[0].productName;
        document.querySelector("#pAvailable0").innerHTML = mobileList[0].productAvailable ? ("Available") : ("Out of Stock");
    }
    else if (manufacturer === 'samsungedge') {
        document.querySelector("#pPrice1").innerHTML = mobileList[1].productPrice + "";
        document.querySelector("#pName1").innerHTML = mobileList[1].productName;
        document.querySelector("#pAvailable1").innerHTML = mobileList[1].productAvailable ? ("Available") : ("Out of Stock");
    }
    else {
        document.querySelector("#pPrice2").innerHTML = mobileList[2].productPrice + "";
        document.querySelector("#pName2").innerHTML = mobileList[2].productName;
        document.querySelector("#pAvailable2").innerHTML = mobileList[2].productAvailable ? ("Available") : ("Out of Stock");
    }
}
