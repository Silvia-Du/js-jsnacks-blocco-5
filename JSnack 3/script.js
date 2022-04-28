/*BONUS
Jsnack 3
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/

const wordContainer = ['ciao', 'come', 'stai', 'oggi', 'sembra', 'una', 'bella', 'giornata',];

const newLanguage = [];

const wordTurner = (string) => string.split('').reverse().join('');

for(let parola in wordContainer){

  const reverseWord = wordTurner(wordContainer[parola])
  newLanguage.push(reverseWord);
}

console.log(newLanguage);

document.getElementById('output-1').innerHTML = `La frase iniziale : " ${wordContainer.join(' ')}! "`;
document.getElementById('output-2').innerHTML = `Nella nuova lingua improponibilie : " ${newLanguage.join(' ')}! "`;