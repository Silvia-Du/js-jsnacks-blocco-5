/*Jsnack 1
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
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
  }
]

// for(let i in varietyZucchine){
//   console.log(varietyZucchine[i], 'oggetto zucchina----')
//   console.log(varietyZucchine[i].pesoGr, 'peso zucchina----');
// }

for(let zucchina of varietyZucchine){
  // console.log(varietyZucchine, 'array');
  console.log(zucchina, 'zucchina');
  console.log(zucchina.pesoGr, 'peso');
  const peso = zucchina.pesoGr;
  console.log(peso, 'peso----');
  
}