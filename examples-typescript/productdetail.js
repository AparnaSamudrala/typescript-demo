//var mobileName = "Samsung Galaxy Note 7";
//var pPrice = '$699';
//var pAvailable = 'Available';
var MobilePrice;
(function (MobilePrice) {
    MobilePrice["Gold"] = "699";
    MobilePrice["Pinkgold"] = "650";
    MobilePrice["Silver"] = "712";
    MobilePrice["pAvailable"] = "Available";
    MobilePrice["pDiscount"] = "15";
    MobilePrice["pDiscountPink"] = "8";
    MobilePrice["pDiscountSilver"] = "10";
})(MobilePrice || (MobilePrice = {}));
document.getElementById("pinkgold").innerHTML = MobilePrice.Pinkgold;
document.getElementById("pPrice").innerHTML = MobilePrice.Gold;
document.getElementById("gold").innerHTML = MobilePrice.Gold;
document.getElementById("silver").innerHTML = MobilePrice.Silver;
document.getElementById("pAvailable").innerHTML = MobilePrice.pAvailable;
document.getElementById("pDiscount").innerHTML = MobilePrice.pDiscount;
function getMobileByColor(color) {
    switch (color) {
        case 'gold':
            document.getElementById("pPrice").innerHTML = MobilePrice.Gold;
            document.getElementById("pDiscount").innerHTML = MobilePrice.pDiscount;
            break;
        case 'pink':
            document.getElementById("pPrice").innerHTML = MobilePrice.Pinkgold;
            document.getElementById("pDiscount").innerHTML = MobilePrice.pDiscountPink;
            break;
        case 'silver':
            document.getElementById("pPrice").innerHTML = MobilePrice.Silver;
            document.getElementById("pDiscount").innerHTML = MobilePrice.pDiscountSilver;
            break;
        default:
            document.getElementById("pPrice").innerHTML = MobilePrice.Gold;
            document.getElementById("pDiscount").innerHTML = MobilePrice.pDiscount;
    }
}
