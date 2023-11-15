
// ! Gioco dei dadi
/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/



const richiamo = document.getElementById('winner');
const pcElem = document.createElement('h2');
richiamo.appendChild(pcElem);


const userElem = document.createElement('h2');
richiamo.appendChild(userElem);


const number = document.createElement('h1');
richiamo.appendChild(number);




// ** creo una variabile dove contiene il numero random del giocatore

const clickGame=document.querySelector('button')


clickGame.addEventListener("click",
function(){
const numUser = Math.floor (Math.random() * 6) + 1;
pcElem.className = 'pc';
userElem.className = 'user';
                             //**stampo in console il numero del giocatore */
console.log(`il numero dell'utente è: ${numUser}`);
document.querySelector('h2.user').innerHTML=`USER: ${numUser}`;


                             //**creo una variabile dove contenere il numero random del pc */
const numPc = Math.floor (Math.random() * 6) + 1;
                             //**stampo in console il numero del pc */
console.log(`il numero del computer è: ${numPc}`);
document.querySelector('h2').innerHTML=`PC: ${numPc}`;



                             // ** creo un for per iniziare il gioco ogni volta che aggiorniamo la pagina, secondo il mio ragionamento basta una volta sola quindi per questo i<1*/
for (let i=0; i<1; i++){
                             //* se il numero del giocatore è maggiore vince */
    if(numUser>numPc){
        console.log(`Il vincitore è il giocatore yeeeeeeeeeeeeeee`);
        document.querySelector('h1').innerHTML=`HAI VINTO <br> <img src="img/winner.jpeg">`;

                             //* altrimeni se il numero del pc è maggiore vince quest'ultimo    
    }else if(numPc>numUser){
        console.log(`il vincitore è il computer buuuuu`);
        
        document.querySelector('h1').innerHTML=`LOSER <br> <img src="img/loser.png">`
                            //* altrimenti è un pareggio   
    }else{
        
        console.log(`Pareggio`);
        document.querySelector('h1').innerHTML=`PAREGGIO <br> <img src="img/loser.png">`
        
    }
}


})

