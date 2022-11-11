/*
  Invertimi
  Scrivi un programma che dato un numero N, generi un array di N numeri casuali
  e stampi sia l'array ottenuto che quello invertito.

  Esempio:
    Input: N = 5
    Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]

  Variante:
  Non utilizzare array/variabili di appoggio per l'inversione.

  Consigli:
  Per la variante ricordati l'uso degli indici del ciclo ;)

  http://www.imparareaprogrammare.it
*/

const n = 10;
// let userN = prompt('inserisci un numero');
//questo potrebbe anche essere un numero preso da un'utente(su cui andrebbero poi fatte le verifiche);
const randN = (min, max) => Math.floor(Math.random() * (max - min +1) + min);

const initGame = (num) =>{
  let collection = [];
  for( let i= 0; i< num; i++ ) collection.push(randN(1,20));
  
  console.log('primo array: ',collection);
  console.log('secondo array: ',collection.reverse());
}

initGame(n);


   