//! Mail
/*Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (createvi una piccola lista di email),
stampa un messaggio appropriato sull’esito del controllo.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?*/

//** chiedere come input all'utente la sua email, quindi creo l'input nell'html */

const inputUser = document.querySelector("button");

inputUser.addEventListener("click",
function(){
    const emailUser = document.getElementById('input').value
})





//** poi in js bisogna creare un array dove inseriamo delle email per confrontarle con l'input (EMAIL)  dell'utente*/

//** stampare poi a schermo l'esito del controllo */
//** Se è uguale a quella che c'è nell'array ok */
//** Altrimenti riscrivi l'email */

