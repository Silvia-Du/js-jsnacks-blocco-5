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

let smallZucchini =[], largeZucchini =[];

const pesaZucchine = (zucchiniContainer) => {
  let ZucchiniWeight = 0;

  // for(let zucchina of zucchiniContainer){
  //   ZucchiniWeight += zucchina.pesoGr;
  // }

  zucchiniContainer.forEach( zucchina => {
    ZucchiniWeight += zucchina.pesoGr;
  });

  console.log(ZucchiniWeight);
  return ZucchiniWeight;
}

smallZucchini = varietyZucchine.filter((zucchina) => {
  return zucchina.lunghezzaCm <= 15;
})

largeZucchini = varietyZucchine.filter((zucchina)=> {
  return zucchina.lunghezzaCm > 15;
})



// for(let zucchina of varietyZucchine){

//   const lenghtZucchina = zucchina.lunghezzaCm;
//   const verifyLenght = ( lenghtZucchina <= 15)? smallZucchini.push(zucchina): largeZucchini.push(zucchina);

// }

const smallZucchiniWeight = pesaZucchine (smallZucchini);
const bigZucchiniWeight = pesaZucchine (largeZucchini);


document.getElementById('output-1').innerHTML = `Il peso delle zucchine piccole è : ${smallZucchiniWeight} grammi ;`

document.getElementById('output-2').innerHTML = `Il peso delle zucchine grandi è : ${bigZucchiniWeight} grammi ;`
