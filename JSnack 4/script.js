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

const bikePrinter = (object) => `La bici più pesante è ${name}, e il suo peso è ${weightKg} kg;`

// const bikeFinder = (container) => {
//   let pesoPiuAlto = 0;

//   for(let i in bikeContainer){

//     const bike = (bikeContainer[i]);
//     const { name, weightKg } = bike;

//     if(weightKg > pesoPiuAlto){
//       pesoPiuAlto = weightKg;
//       heavierBike = bike;
//     }
//   }
//   return heavierBike;

// }

//const heavierBike = bikeFinder(bikeContainer);



let pesoPiuAlto = 0;
let heavierBike;

for(let i in bikeContainer){

  const bike = (bikeContainer[i]);
  const { name, weightKg } = bike;

  if(weightKg > pesoPiuAlto){
    pesoPiuAlto = weightKg;
    heavierBike = bike;
  }
}

const {name, weightKg} = heavierBike;
document.getElementById('output').innerHTML = bikePrinter(heavierBike);


  