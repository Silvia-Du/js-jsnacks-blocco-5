/*
Jsnack 2
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

const varietyZucchine = [
  {
    name: 'zucchina nera',
    pesoGr: 70,
    lunghezzaCm: 18,
  },
  {
    name: 'zucchino romanesco',
    pesoGr: 80,
    lunghezzaCm: 15,
  }, 
  {
    name: 'zucchino fiorentino',
    pesoGr: 95,
    lunghezzaCm: 17,
  }, 
  {
    name: 'zucchina tonda',
    pesoGr: 70,
    lunghezzaCm: 15,
  },
  {
    name: 'zucchina trombetta',
    pesoGr: 75,
    lunghezzaCm: 18,
  },
  {
    name: 'zucchina napoletana',
    pesoGr: 95,
    lunghezzaCm: 21,
  },
  {
    name: 'zucchina fantasia',
    pesoGr: 65,
    lunghezzaCm: 12,
  }, 
  {
    name: 'zucchino zucchinello',
    pesoGr: 90,
    lunghezzaCm: 23,
  }, 
  {
    name: 'zucchina tondeggiante',
    pesoGr: 70,
    lunghezzaCm: 21,
  },
  {
    name: 'zucchina montanara',
    pesoGr: 60,
    lunghezzaCm: 14,
  },
]

const littleZucchini =[];
const largeZucchini =[];

for(let zucchina of varietyZucchine){

  console.log(zucchina.lunghezzaCm, 'zucchina lenght');
  const lenghtZucchina = zucchina.lunghezzaCm;
  const verifyLenght = ( lenghtZucchina <= 15)? littleZucchini.push(zucchina): largeZucchini.push(zucchina);


}

console.log(littleZucchini, 'piccole container');
console.log(largeZucchini, 'grandi container');
