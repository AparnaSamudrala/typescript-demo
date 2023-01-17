enum MobilePrice {Gold= "699", Pinkgold= "650", Silver= "712" , pAvailable = "Available", pDiscount = "15", pDiscountPink = "8", pDiscountSilver = "10"
}

document.getElementById("pinkgold").innerHTML = MobilePrice.Pinkgold;
document.getElementById("pPrice").innerHTML = MobilePrice.Gold;
document.getElementById("gold").innerHTML = MobilePrice.Gold;
document.getElementById("silver").innerHTML = MobilePrice.Silver;

document.getElementById("pAvailable").innerHTML = MobilePrice.pAvailable;
document.getElementById("pDiscount").innerHTML = MobilePrice.pDiscount;
 
function getMobileByColor(color: string){
    switch(color){
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
