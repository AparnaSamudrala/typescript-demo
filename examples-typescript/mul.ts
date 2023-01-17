// program to generate a multiplication table

function multiplicationTable(x: number){
  
    for(let i = 1; i <= 10; i++) {

        // multiply i with number
        const result = i * x;
    
        // display the result
        console.log(`${x} * ${i} = ${result}`);
    }

} 

multiplicationTable(20);