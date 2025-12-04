/* Il software deve chiedere per 5 volte all’utente di inserire un numero. 
 Il programma stampa la somma di tutti i numeri inseriti. 
 Esegui questo programma in due versioni, con il for e con il while (facoltativo) */


 // METODO 1 //
const userNum = [];
let sum = 0;
let sum2 = 0;
let sum3 = 0;

for (let i = 0; i < 5; i++) {
    
    userNum[i] = parseInt(prompt("inserisci un numero"));

 }

console.log(userNum.reduce(somma));

function somma(tot, num)
{
return tot + num;
}
 

// METODO 2 //

for (let i = 0; i < userNum.length; i++) {
    
    sum2 += userNum[i];
    
}
console.log(sum2);


// METODO 3 //
let i = 0; 
while(i < userNum.length)
{
    sum3 += userNum[i];
    i++;
}
console.log(sum3);
