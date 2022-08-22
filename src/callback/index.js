function sumar(x, y) {
  return x + y;
}

function calc(x, y, callback) {
  return callback(x, y);
}

console.log(calc(2, 5, sumar));

setTimeout(() => {
  console.log('hola js, setTimeOut');
}, 2000);

function saludar(nombre) {
  console.log(`Hola: ${nombre}`)
}

setTimeout(() => {
  saludar('Andres')
}, 3000);