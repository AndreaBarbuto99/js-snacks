/* Snack 3
 Crea un array vuoto. 
 Chiedi per 6 volte all’utente di inserire un numero, 
 se è dispari inseriscilo nell’array */

const newArray = [];
let userNum = 0;
for (let i = 0; i < 6; i++) {
    
    userNum = parseInt(prompt("Inserisci un numero"));
    if (userNum % 2 != 0)
    {
        newArray.push(userNum);
    }
}

console.log(newArray);
