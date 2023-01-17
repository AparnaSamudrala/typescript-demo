//function binary to decimal
function binToDec(num) {
    let dec = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[num.length - (i + 1)] === '1') {
            dec += 2 ** i;
        }
    }
    return dec;
}

console.log(binToDec('1010')); // 10

//another way for converting binary to decimal
function bin2dec(bin){
    return parseInt(bin, 2).toString(10);
  }

  console.log(bin2dec(1010));

// function decimal to binary

function decToBin(decimal){
    
    let binary = "";
    while (decimal > 0) {
    if (decimal % 2 == 1) {
        binary = "1" + binary;
    } else {
        binary = "0" + binary;
    }
    
    decimal = Math.floor(decimal / 2);
    }
    console.log("Binary string is " + binary);
}

console.log(decToBin(2));

//another way to convert decimal to binary

const number = 8;

const result = number.toString(2);

console.log('Binary:' + ' ' + result);

