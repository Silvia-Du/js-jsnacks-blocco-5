/*BONUS
Jsnack 3
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/

const wordContainer = ['ciao', 'come', 'stai', 'oggi', 'sembra', 'una', 'bella', 'giornata',];

const wordTurner = (string) => string.split('').reverse().join('');

for(let parola in wordContainer){

  console.log(wordContainer[parola], 'parola');
  
}