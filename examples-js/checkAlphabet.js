function checkAlphabet(char){
    var char = char.toUpperCase();
if(char == "A" || char == "E" || char == "I" || char == "o" || char == "U")
    console.log(char+" is a vowel");
else
console.log(char+" is a constant");
    
}
checkAlphabet('A');

//another way

function checkAlphabet(char){
    if(typeof char === 'string')
    {
        char = char.toUpperCase();
        (char == "A" || char == "E" || char == "I" || char == "O" || char == "U") ? console.log(char+" is a Vowel") : console.log(char+" is a Consonant");
    }
    else
    console.log("Invalid Alphabet !!")
}