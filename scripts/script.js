/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

const numOne = parseInt(prompt("Inserisci il primo numero"));
const numTwo = parseInt(prompt("Inserisci il secondo numero"));
console.log(typeof numOne);

if(Number.isInteger(numOne) === true && Number.isInteger(numTwo) === true )
{
    if (numOne > numTwo)
    {
        console.log(numOne);
        
    }

    else if(numTwo > numOne)
    {
        console.log(numTwo);
    }
    
}

else {
    console.log("non hai inserito dei numeri"); 
}