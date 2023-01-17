// program to print prime numbers between the two numbers
function getPrimeNumbers(l, h) {
    //l = parseInt(l);
    //h = parseInt(h);
    console.log("The prime numbers between ".concat(l, " and ").concat(h, " are:"));
    // looping from lowerNumber to higherNumber
    for (var i = l; i <= h; i++) {
        var flag = 0;
        // looping through 2 to user input number
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        // if number greater than 1 and not divisible by other numbers
        if (i > 1 && flag == 0) {
            console.log(i);
        }
    }
}
getPrimeNumbers(1, 10);
