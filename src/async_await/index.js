const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true ? setTimeout(() => resolve('Async!!'), 4000) : setTimeout(() => reject(new Error('Error!! y entramos a Reject')), 2000);

  })
}

const otraFn = async () => {
  const esperandoFn = await fnAsync();
  console.log(esperandoFn);
  console.log('Console.log final')
}

console.log('Antes de otraFn...');
otraFn();
console.log('Despues de otraFn...');
