
// ! Gioco dei dadi
/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

// ** creo una variabile dove contiene il numero random del giocatore

const numUser = Math.floor (Math.random() * 6) + 1;

//**stampo in console il numero del giocatore */
console.log(`il numero dell'utente è: ${numUser}`);

//**creo una variabile dove contenere il numero random del pc */
const numPc = Math.floor (Math.random() * 6) + 1;
//**stampo in console il numero del pc */
console.log(`il numero del computer è: ${numPc}`);


// ** creo un for per iniziare il gioco ogni volta che aggiorniamo la pagina, secondo il mio ragionamento basta una volta sola quindi per questo i<1*/
for (let i=0; i<1; i++){
    //* se il numero del giocatore è maggiore vince */
    if(numUser>numPc){
        console.log(`Il vincitore è il giocatore yeeeeeeeeeeeeeee`)
    //* altrimeni se il numero del pc è maggiore vince quest'ultimo    
    }else if(numPc>numUser){
        console.log(`il vincitore è il computer buuuuu`)
    //* altrimenti è un pareggio   
    }else{
        
        console.log(`Pareggio`)
    }
}