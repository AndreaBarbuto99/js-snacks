/* L’utente inserisce due parole in successione, con due prompt. 
 Il software stampa prima la parola più corta, poi la parola più lunga. */


 userWordOne = prompt("inserisci una parola");
 userWordTwo = prompt("Inserisci una seconda parola");

 if (userWordOne.length > userWordTwo.length)
 {
    console.log("la parola più corta è " + userWordTwo);
    console.log("la parola più lunga è " + userWordOne);
 }

 else {
    console.log("la parola più corta è " + userWordOne);
    console.log("la parola più lunga è " + userWordTwo);
 }