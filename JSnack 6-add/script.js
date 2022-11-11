/*
  Azzecca e azzera
  Scrivi un programma che dato un array di 100 elementi, lo riempia con numeri interi casuali da 1 a 50.
  Permetti all'utente di inserire un numero e azzera tutti i gli elementi nell'array principale che sono suoi multipli.
  Richiedi all'utente un altro numero e così via.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Per richiedere un numero all'utente puoi usare il comando prompt(), se vuoi saperne di più puoi controllare nella
  documentazione: https://developer.mozilla.org/it/docs/Web/API/Window/prompt

  http://www.imparareaprogrammare.it
*/

//gemnerare l'array -DO
//chiedere numero all'utente -DO
//verificare i multipli e convertirli in 0 -DO
//verificare che siano tutti zero, se si, si FINE GIOCO, se no chiede un numero all'utente

const randN = (min, max) => Math.floor(Math.random() * (max - min +1) + min);
const totNum = 10;

//FUNZIONE DI FINE GIOCO
const endGame = () => alert('Gioco finito!');

//VERIFICA REQUISITI E MODIFICA ARRAY, LOGICA DEL PROGRAMMA
const checkNum = (num, array) =>{

  let count = 0;

  for(let i=0; i< array.length; i++ ){

    if(array[i] % num == 0){
      array[i] = 0;
    } 

    if (array[i] == 0) count ++;
  }

  console.log(array);

  if(count == totNum){
    endGame();
  }else{
    getNum(array);
  } 
}

//RICHIESTA E VERIFICA DATO INSERITO DALL'UTENTE
function getNum(array){

  let n;
  let check = false;

  while(!check){
    n = prompt('inserisci un numero tra 1 e 50');
    if(isNaN(n)){
      alert('inserisci un numero non lettere');
    }else if(n< 1){
      alert('il numero non può essere inferiore a 1');
    }else if(n > 50){
      alert('il numero non può essere maggiore di 50')
    }else{
      check = true;
    } 
  }

  checkNum(n, array);
}

//INIZIO DEL PROGRAMMA 
const initP = () =>{
  let collection = [];
  for( let i = 0; i< totNum ; i++ ){
    collection.push(randN(1, 20));
  }

  // let collection = [2,4,6,8,10,12,14, 16, 18, 20];
  //array di test funzionamento

  getNum(collection);
}


initP();



  