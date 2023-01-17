// program to generate a multiplication table

function multiplication(number){
  number = parseInt(number)
    for(let i = 1; i <= 10; i++) {

        // multiply i with number
        const result = i * number;
    
        // display the result
        console.log(`${number} * ${i} = ${result}`);
    }

} 

multiplication(20);