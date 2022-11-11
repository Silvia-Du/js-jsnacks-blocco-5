/*
   La tombola magica
  Scrivi un programma che dato:
  - un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
  - un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
  Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
    2 numeri uguali => ambo
    3 numeri uguali => terna
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
    tutti i numeri uguali => tombola

  In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
  in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

//chiedre 10 numeri univoci all'utente
//creare array di numeri unicìvoci per la macchina
//verificare che ogni numero da me scelto sia nell'array della macchina farei forach dei miei e gli chiedo se l'altro include().
//se è vero che è incluso conto piu uno, ritorno il numero. se quel numero è = 10 output vittoria, se no output con numeri azzeccati

const userN = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//funz num random
const randN = (min, max) => Math.floor(Math.random() * (max - min +1) +min);

const getUserN = () => {
  
  const userN = [];
  const n = alert('inserisci 10 numeri tra 1 e 50');
  while(userN.length < 10){
    const n = prompt('inserisci un numero da 1 a 50', `inserisci il ${userN.length + 1 } numero `);
    if(n < 1 | n > 50 ) alert('il numero inserito deve essere compreso tra 1 e 50');
    else if(isNaN(n)) alert('inserisci numeri non lettere');
    else userN.push(parseInt(n));
  }
  console.log(userN);
  return userN;

}

const getTombola = ( coll1, coll2 ) =>{

  let count = 0;

  coll1.forEach(e => {

    if(coll2.includes(e)) count ++;

  });
  console.log(count);

  return count == 10? 'complimenti hai fatto tombola!' : `Mi dispiace! hai indovinato ${count} numeri`;

}

const initGame = () =>{

  const machineN = [];

  while(machineN.length < 10){

    let n = randN(1, 50);
    if( !machineN.includes(n) ) machineN.push(n);

  }
  console.log(machineN);
  const userN = getUserN();

  const output = getTombola(userN, machineN);
  console.log(output);
}

initGame();





   