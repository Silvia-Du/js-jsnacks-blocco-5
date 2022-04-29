/*
Jsnack 4
Crea un array di oggetti, in cui ogni oggetto descrive una bici da corsa con le seguenti proprietà: nome e peso.
Stampa a schermo la bici con peso minore utilizzando destructuring e template literal
*/


const bikeContainer = [
  {
    name: 'Scott Scale98',
    weightKg: '12',
  },
  {
    name: 'Orbea mx50',
    weightKg: '12.5',
  }, 
  {
    name: 'Conor-WRC',
    weightKg: '13',
  }, 
  {
    name: 'Scott Aspect',
    weightKg: '14',
  }, 
  {
    name: 'Graziella',
    weightKg: '17',
  },
  {
    name: 'Spark RC',
    weightKg: '12',
  },
  {
    name: 'Scott Ransom',
    weightKg: '12.5',
  },
  {
    name: 'Scott Volage',
    weightKg: '11',
  }
]

const bikePrinter = (object) => `La bici più leggera è ${name}, e il suo peso è ${weightKg} kg;`


let lighterWeight;
let lighterBike;

for(let i in bikeContainer){

  const bike = (bikeContainer[i]);
  const {weightKg } = bike;

  if (lighterWeight == undefined || lighterWeight > weightKg ){
    lighterWeight = weightKg;
    lighterBike = bike;
  }
}

const {name, weightKg} = lighterBike;
document.getElementById('output').innerHTML = bikePrinter(lighterBike);



// qui una soluzione dove racchiudo la logica in una funzione, x bici piu pesante...non saprei dire quale cosa è meglio se con o senza funzione;






  