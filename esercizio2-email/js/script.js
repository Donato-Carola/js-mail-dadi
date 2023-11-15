//! Mail
/*Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (createvi una piccola lista di email),
stampa un messaggio appropriato sull’esito del controllo.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?*/

                                                            //** chiedere come input all'utente la sua email, quindi creo l'input nell'html */

const risposta = document.getElementById('risultato');
const text = document.createElement('h1')
risposta.appendChild(text);

                                                            
const inputUser = document.querySelector("button");

                                                            //** poi in js bisogna creare un array dove inseriamo delle email per confrontarle con l'input (EMAIL)  dell'utente*/
const arrayEmail = ['don94@live.it', 'MarioCorre@ciambella.com'];

let found = false;

                                                            //**aggiungo un evento, cliccando sul button mi fa il controllo dell'email */
inputUser.addEventListener("click",
function(){
 //   console.log(arrayEmail)

                                                            //**input dell'utente usando .value cosi possiamo usare il valore inserito all'interno dell'elemento input  */
    const emailUser = document.getElementById('input').value;
   // console.log(emailUser)
    
    

    for (let i=0; i<arrayEmail.length; i++){
       const elemento = arrayEmail[i];
      //  console.log(i,elemento)
  
         if(emailUser === elemento){
            found = true;
          //  console.log('email è giusta continua a navigare');
        }
    }

    if(found ) {
        console.log('email trovata');
        document.querySelector('h1').innerHTML = `email ${emailUser}  trovata`
    } else if (found === false || emailUser === '') {
        console.log('email non trovata')
        document.querySelector('h1').innerHTML = `email ${emailUser} non trovata`
    }

    //** Inizio il controllo */
   
})







//** stampare poi a schermo l'esito del controllo */
//** Se è uguale a quella che c'è nell'array ok */
//** Altrimenti riscrivi l'email */

