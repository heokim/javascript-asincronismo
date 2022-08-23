const promesa = new Promise((resolve, reject) => {
  resolve('Hey, esta resolvido');
});

let vacas = 15;

const contarVacas = new Promise((resolve, reject) => {
  if (vacas > 10) {
    resolve(`Tenemos ${vacas} vacas en la granja.`);
  } else {
    reject('No contamos con las vacas necesarias!');
  }
});

contarVacas.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
}).finally(() => console.log('promesa finalizada!'));