//! Mail
/*Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (createvi una piccola lista di email),
stampa un messaggio appropriato sull’esito del controllo.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?*/

//** chiedere come input all'utente la sua email, quindi creo l'input nell'html */

const inputUser = document.querySelector("button");

//** poi in js bisogna creare un array dove inseriamo delle email per confrontarle con l'input (EMAIL)  dell'utente*/
const arrayEmail = ['don94@live.it', 'MarioCorre@ciambella.com'];

//**aggiungo un evento, cliccando sul button mi fa il controllo dell'email */
inputUser.addEventListener("click",
function(){

    //**input dell'utente usando .value cosi possiamo usare il valore all'interno dell'elemento input inserito */
    const emailUser = document.getElementById('input').value
    console.log(emailUser)


    //** Inizio il controllo */
    if(emailUser == arrayEmail){
        console.log('email è giusta continua a navigare');
    }else{
       console.log(`Riscrivi l'email perchè l'email è sbagliata`);
    }
})







//** stampare poi a schermo l'esito del controllo */
//** Se è uguale a quella che c'è nell'array ok */
//** Altrimenti riscrivi l'email */

